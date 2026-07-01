/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
- `id` (uuid, primary key)
- `name` (text, not null) - sender's name
- `email` (text, not null) - sender's email for reply
- `subject` (text, not null) - message subject
- `message` (text, not null) - message content
- `created_at` (timestamptz, default now) - submission timestamp
- `read` (boolean, default false) - track if message has been read

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to INSERT (anyone can submit contact form).
- Allow only authenticated to SELECT/UPDATE/DELETE (admin access for future dashboard).
- Note: This is a public contact form, so INSERT is open to all visitors.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact messages (public contact form)
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Only authenticated users can read messages (for future admin dashboard)
DROP POLICY IF EXISTS "authenticated_select_contact_messages" ON contact_messages;
CREATE POLICY "authenticated_select_contact_messages" ON contact_messages FOR SELECT
  TO authenticated USING (true);

-- Only authenticated users can update messages
DROP POLICY IF EXISTS "authenticated_update_contact_messages" ON contact_messages;
CREATE POLICY "authenticated_update_contact_messages" ON contact_messages FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users can delete messages
DROP POLICY IF EXISTS "authenticated_delete_contact_messages" ON contact_messages;
CREATE POLICY "authenticated_delete_contact_messages" ON contact_messages FOR DELETE
  TO authenticated USING (true);

-- Create index for sorting by created_at
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);