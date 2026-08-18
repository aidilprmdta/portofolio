-- ==============================================================================
-- SUPABASE DATABASE SCHEMA UNTUK TABEL KOMENTAR (GUESTBOOK)
-- ==============================================================================
-- Jalankan skrip ini di Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Buat tabel comments
CREATE TABLE IF NOT EXISTS public.comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Aktifkan Row Level Security (RLS)
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- 3. Kebijakan (Policy) 1: Izinkan siapa saja membaca komentar (SELECT)
CREATE POLICY "Allow public read access"
    ON public.comments
    FOR SELECT
    TO public
    USING (true);

-- 4. Kebijakan (Policy) 2: Izinkan siapa saja menambah komentar baru (INSERT)
CREATE POLICY "Allow public insert access"
    ON public.comments
    FOR INSERT
    TO public
    WITH CHECK (true);

-- 5. Masukkan data awal (optional seed comments)
INSERT INTO public.comments (name, role, text) VALUES
    ('Sarah Jenkins', 'UX Architect', 'Suka sekali dengan visual bento grid-nya. Sangat rapi dan interaktif!'),
    ('Budi Pratama', 'Senior Frontend Dev', 'Desain Neo-Brutalist yang sangat berani dan segar. Good job, Alex!');
