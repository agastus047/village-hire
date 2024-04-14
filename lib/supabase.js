import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://wekqsrfiefnwekvvifbd.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indla3FzcmZpZWZud2VrdnZpZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NjA3NzMsImV4cCI6MjAyODQzNjc3M30.HgUdm24cy3l7he72YTETxpRLDQw88KJ0ZwFa5WSgU9E');

export default supabase;