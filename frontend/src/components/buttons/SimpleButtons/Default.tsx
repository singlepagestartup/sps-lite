import Link from "next/link";
import { useRouter } from "next/router";
import { IButton } from "types";

export default function Default(props: IButton) {
  const router = useRouter();
  const { url, title } = props;

  return (
    <Link
      href={url}
      className={`inline-flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50`}
    >
      {title}
    </Link>
  );
}
