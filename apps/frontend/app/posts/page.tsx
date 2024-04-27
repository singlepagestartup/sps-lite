import { BACKEND_URL } from "../../src/utils/envs";
import { Component as CreatePostForm } from "../../src/components/create-post-form";
import { Component as Post } from "../../src/components/post";

export default async function Page(props: any) {
  const { params } = props;
  params.id = params.id;

  const res = await fetch(`${BACKEND_URL}/api/posts`);
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
      <CreatePostForm />
      {data &&
        data?.length > 0 &&
        data?.map((post: any, index: number) => {
          return <Post key={index} data={post} />;
        })}
    </div>
  );
}
