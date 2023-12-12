import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import getFileUrl from "~utils/api/get-file-url";
import { useEffect, useState } from "react";
import { ILoader } from "../..";

export default function Simple(props: ILoader) {
  const [passed, setPassed] = useState(false);
  const [hideLoader, setHideLoader] = useState(true);
  const [closeLoader, setCloseLoader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPassed(true);
    }
  }, []);

  const fromLoaderStyles = {
    opacity: 1,
  };

  const toLoaderStyles = {
    opacity: 0,
  };

  const loaderStyles = useSpring({
    from: fromLoaderStyles,
    to: closeLoader ? toLoaderStyles : fromLoaderStyles,
    delay: 1000,
    config: {
      duration: 500,
    },
  });

  useEffect(() => {
    let loaderTm: undefined | ReturnType<typeof setTimeout>;
    let hideLoaderTm: undefined | ReturnType<typeof setTimeout>;

    if (passed) {
      setCloseLoader(true);

      hideLoaderTm = setTimeout(() => {
        setHideLoader(true);
      }, 1000);
    }

    return () => {
      clearTimeout(loaderTm);
      clearTimeout(hideLoaderTm);
    };
  }, [passed]);

  return (
    <div
      data-single-type="loader"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <animated.div
        className={`loader-container ${hideLoader ? "-z-1 hidden" : "z-[200]"}`}
        style={loaderStyles}
      >
        {props.media?.length ? (
          <Image
            src={getFileUrl(props.media[0])}
            width={150}
            height={150}
            alt=""
          />
        ) : null}
      </animated.div>
      {props.children}
    </div>
  );
}
