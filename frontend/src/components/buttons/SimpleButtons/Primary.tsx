import Link from "next/link";
import { useRouter } from "next/router";
import { IButton } from "types";

export default function Primary(props: IButton) {
  const router = useRouter();
  const { url, title } = props;

  return (
    <Link
      href={url}
      className={`inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
    >
      {title}
    </Link>
  );
}
