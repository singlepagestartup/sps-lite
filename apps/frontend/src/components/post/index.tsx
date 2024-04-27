import Link from "next/link";
import React from "react";

export function Component({
  data,
}: {
  data: {
    id: number;
    title: string;
    content: string;
  };
}) {
  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-100 w-full min-w-80 rounded-lg">
      <Link
        href={`/posts/${data.id}`}
        className="text-4xl cursor-pointer hover:opacity-60 w-fit"
      >
        {data.title}
      </Link>
      <p>{data.content}</p>
    </div>
  );
}
