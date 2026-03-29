import { getServiceClient } from "@/lib/utils/supabase/service";

export async function checkUserProfile(userEmail: string) {
  const { data: user, error } = await getServiceClient()
    .from("profiles")
    .select()
    .eq("email", userEmail.toLowerCase())
    .single();

  if (error) {
    console.error("Error fetching user :", error);
    return null;
  }

  return user;
}
