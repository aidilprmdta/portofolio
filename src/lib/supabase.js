import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (import.meta.env.PUBLIC_SUPABASE_URL || "").trim();
const supabaseAnonKey = (import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "").trim();

export const isSupabaseConfigured = () => {
  return (
    Boolean(supabaseUrl) &&
    Boolean(supabaseAnonKey) &&
    !supabaseUrl.includes("your-project-ref") &&
    !supabaseAnonKey.includes("your-anon-key")
  );
};

let clientInstance = null;

export const getSupabase = () => {
  if (!isSupabaseConfigured()) return null;
  if (!clientInstance) {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return clientInstance;
};

/**
 * Fetch all comments from Supabase ordered by created_at DESC
 */
export async function fetchCommentsFromSupabase() {
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

    return { data, error: null };
  } catch (err) {
    console.error("[Supabase] Error fetching comments:", err);
    return { data: null, error: err };
  }
}

/**
 * Insert a new comment into Supabase
 */
export async function postCommentToSupabase(comment) {
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

    return { data, error: null };
  } catch (err) {
    console.error("[Supabase] Unexpected error posting comment:", err);
    return { data: null, error: err };
  }
}
