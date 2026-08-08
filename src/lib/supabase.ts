import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Comment } from "../data/comments";

const supabaseUrl = (import.meta.env.PUBLIC_SUPABASE_URL || "").trim();
const supabaseAnonKey = (import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "").trim();

export const isSupabaseConfigured = (): boolean => {
  return (
    Boolean(supabaseUrl) &&
    Boolean(supabaseAnonKey) &&
    !supabaseUrl.includes("your-project-ref") &&
    !supabaseAnonKey.includes("your-anon-key")
  );
};

let clientInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) return null;
  if (!clientInstance) {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return clientInstance;
};

/**
 * Fetch all comments from Supabase ordered by created_at DESC
 */
export async function fetchCommentsFromSupabase(): Promise<{ data: Comment[] | null; error: any }> {
  const client = getSupabase();
  if (!client) {
    return { data: null, error: new Error("Supabase credentials not configured in .env") };
  }

  try {
    const { data, error } = await client
      .from("comments")
      .select("id, name, role, text, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("[Supabase] Failed to fetch comments:", error);
      return { data: null, error };
    }

    return { data: data as Comment[], error: null };
  } catch (err) {
    console.error("[Supabase] Error fetching comments:", err);
    return { data: null, error: err };
  }
}

/**
 * Insert a new comment into Supabase
 */
export async function postCommentToSupabase(comment: {
  name: string;
  role: string;
  text: string;
}): Promise<{ data: Comment | null; error: any }> {
  const client = getSupabase();
  if (!client) {
    return { data: null, error: new Error("Supabase credentials not configured in .env") };
  }

  try {
    const { data, error } = await client
      .from("comments")
      .insert([
        {
          name: comment.name,
          role: comment.role,
          text: comment.text,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("[Supabase] Failed to insert comment:", error);
      return { data: null, error };
    }

    return { data: data as Comment, error: null };
  } catch (err) {
    console.error("[Supabase] Unexpected error posting comment:", err);
    return { data: null, error: err };
  }
}
