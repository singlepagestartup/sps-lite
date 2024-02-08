import React, { useRef } from "react";
import { useTransition } from "@react-spring/web";
import Notification from "./Notification";

const defaultNotificationHeight = 44;

const Overlay = ({
  notifications = [],
  remove = () => ({}),
  position = "bottom",
  className,
}: any) => {
  // use weakmap to get div height for alert items
  //
  // prevents memory leaks by garbage collecting removed items
  const ref = useRef(new Map());
  const refMap = ref.current;

  const transitionConfigWithHeightAnimation = {
    from: {
      opacity: 0,
      height: 0,
      transform: `translateY(${position === "top" ? "-100%" : 0}) scale(1)`,
      marginBottom: 0,
    },
    enter: (item: any) => async (next: any) => {
      const minHeight = item.minHeight || defaultNotificationHeight;
      const offsetHeight = refMap.get(item).offsetHeight;
      await next({
        opacity: 1,
        height: offsetHeight >= minHeight ? offsetHeight : minHeight,
        transform: "translateY(0) scale(1)",
        marginBottom: 8,
      });
    },
    update: (item: any) => async (next: any) => {
      const minHeight = item.minHeight || defaultNotificationHeight;
      const offsetHeight = refMap.get(item).offsetHeight;
      await next({
        height: offsetHeight >= minHeight ? offsetHeight : minHeight,
      });
    },
    leave: () => async (next: any) => {
      await next({
        opacity: 1,
        height: 0,
        transform: "translateY(0 scale(0.9)",
        marginBottom: 0,
      });
    },
  };

  const transitions = useTransition(
    notifications,
    transitionConfigWithHeightAnimation,
  );

  return (
    <div
      data-ui="components.notification"
      data-position={position}
      className={className || ""}
    >
      {transitions((styles, item) => {
        return (
          <Notification
            key={item.id}
            styles={styles}
            ref={(ref) => {
              return ref && refMap.set(item, ref);
            }}
            remove={() => remove(item.id)}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default Overlay;
