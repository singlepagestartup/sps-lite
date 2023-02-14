import Link from "next/link";
import { useRouter } from "next/router";
import { IButton } from "types";

export default function BottomLine(props: IButton) {
  const router = useRouter();
  const { url, title } = props;

  return (
    <Link
      href={url}
      scroll={false}
      className={`inline-flex w-full lg:w-fit items-center lg:border-b-2 px-2 py-4 lg:px-1 lg:py-1 text-sm font-medium ${
        router.route === url ? `border-primary-500 text-gray-900` : ``
      }`}
    >
      {title}
    </Link>
  );
}
