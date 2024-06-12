"use server";
import { cookies } from "next/headers";

export async function action() {
  cookies().set("test", "test");
}
