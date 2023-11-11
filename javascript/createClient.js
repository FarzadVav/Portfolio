import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://lixflozgzoppjurmgxit.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpeGZsb3pnem9wcGp1cm1neGl0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTYyNTA5OCwiZXhwIjoyMDE1MjAxMDk4fQ.z4sJiqqXDUWMhubpG78bmmdSDtORXqZUyA1nLTVKF5c'
)

export default supabase