import { IBackendPage } from "types/collection-types";

export default function CustomPage(props: IBackendPage) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Custom page</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 600,
  };
};
