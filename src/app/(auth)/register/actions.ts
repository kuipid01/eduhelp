"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../../../utils/supabase/client";

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: "test",
    location: "tst loc",
    website: "test.com",
    avatar_url: "test",
    description: "test",
  };

  const { error } = await supabase.auth.signUp(data);
  console.log(error);
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
