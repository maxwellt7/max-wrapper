import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | undefined;

export function getServiceClient(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_SUPABASE_SERVICE_KEY!
    );
  }
  return _supabase;
}
