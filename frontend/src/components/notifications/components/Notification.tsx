import React from "react";
import { animated } from "@react-spring/web";
import ReactMarkdown from "react-markdown";
import { XMarkIcon } from "@heroicons/react/24/outline";

// use forwardRef here to access alert *content* div height
// used to animate *container* div height from 0 <-> auto during enter / leave transition
const Notification = React.forwardRef((props: any, ref: any) => {
  const {
    title = "",
    message = "",
    remove = () => ({}),
    styles,
    Child,
    CloseIcon,
    showDefault = true,
    className,
  } = props;

  const CloseIconComp = CloseIcon
    ? (props: any) => <CloseIcon {...props} />
    : (props: any) => <CloseButton {...props} />;

  return (
    <animated.div
      className={`notification ${className || ""}`}
      style={{
        ...styles,
      }}
    >
      <div className="notification-container" ref={ref}>
        {Child ? <Child {...props} /> : null}
        {showDefault ? (
          <div
            className="notification-body"
            data-message={message ? true : false}
            data-heading={title ? true : false}
          >
            <div
              className="notification-heading"
              data-heading={title ? true : false}
            >
              <ReactMarkdown>{title}</ReactMarkdown>
            </div>
            <div
              className="notification-message"
              data-message={message ? true : false}
            >
              <ReactMarkdown>{message}</ReactMarkdown>
            </div>
          </div>
        ) : null}
        <CloseIconComp remove={remove} />
      </div>
    </animated.div>
  );
});

export default Notification;

const CloseButton = ({ remove = () => ({}) }) => {
  return (
    <button onClick={remove} className="button-close">
      <XMarkIcon />
    </button>
  );
};
