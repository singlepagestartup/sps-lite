import React from "react";
import { animated } from "@react-spring/web";
import ReactMarkdown from "react-markdown";

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
  } = props;

  const CloseIconComp = CloseIcon
    ? (props: any) => <CloseIcon {...props} />
    : (props: any) => <CloseButton {...props} />;

  return (
    <animated.div
      className="notification_container"
      style={{
        ...styles,
      }}
    >
      <div className="wrapper" ref={ref}>
        {Child ? <Child {...props} /> : null}
        {showDefault ? (
          <div
            className="body"
            data-message={message ? true : false}
            data-heading={title ? true : false}
          >
            <div className="heading" data-heading={title ? true : false}>
              <ReactMarkdown>{title}</ReactMarkdown>
            </div>
            <div className="message" data-message={message ? true : false}>
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
    <button onClick={remove} className="close_button">
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
        />
      </svg>
    </button>
  );
};
