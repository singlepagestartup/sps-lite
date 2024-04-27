import Link from "next/link";
import { BACKEND_URL } from "../../../src/utils/envs";
import { Component as Post } from "../../../src/components/post";

export default async function Page(props: any) {
  const { params } = props;
  params.id = params.id;

  const res = await fetch(`${BACKEND_URL}/api/posts/${params.id}`);

  if (!res.ok) {
    return (
      <div className="p-5 bg-red-100 text-red-600 text-lg rounded-lg">
        Failed to fetch
      </div>
    );
  }

  const { data } = await res.json();

  return (
    <div className="flex flex-col gap-3">
      <Link
        href="/posts"
        className="px-5 py-1 bg-black hover:opacity-60 text-white w-fit rounded-lg cursor-pointer"
      >
        Back to posts
      </Link>
      <Post data={data} />
    </div>
  );
}
