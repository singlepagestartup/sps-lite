"use client";
import { BACKEND_URL } from "@sps/shared-utils";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

export function Component() {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: { [key: string]: string } = {};

    const fields = ["title", "content"];

    for (const field of fields) {
      const input = event.currentTarget.elements.namedItem(
        field,
      ) as HTMLInputElement;

      data[field] = input.value;

      if (!input.value) {
        return;
      }
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    // Sometimes you can get an error
    // duplicate key value violates unique constraint "posts_pkey"
    // try to save app/api/[[...route]]/route.ts file
    // hono project will automatically reload the server and error will be gone
    const response = await fetch(`${BACKEND_URL}/api/posts`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      router.refresh();
    }
  }

  return (
    <div className="bg-gray-100 p-5">
      <h2>Create post</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 rounded-lg"
        ></input>
        <textarea
          name="content"
          placeholder="Content"
          className="p-2 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="px-5 py-1 bg-black hover:opacity-60 text-white w-fit rounded-lg cursor-pointer"
        >
          Create post
        </button>
      </form>
    </div>
  );
}
