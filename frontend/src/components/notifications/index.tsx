"use client";

import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import Overlay from "./components/Overlay";
import * as ReactDOM from "react-dom/client";
const NotificationsContext = createContext({ add: () => null });
export const useNotifications = () => useContext(NotificationsContext);

interface NotificationMessage {
  title?: string;
  message?: string;
  duration?: number;
  className?: string;
}

const isBrowser = typeof window !== "undefined";

export const NotificationsWrapper = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState([]);

  // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
  const remove = (timestampId: number) => {
    setNotifications((alertNotifications) =>
      alertNotifications.filter(
        (alertInfo: any) => alertInfo?.id !== timestampId,
      ),
    );
  };

  const add = ({ duration = 8000, ...props }) => {
    // use creation timestamp as psuedo-unique alert object ID
    const newNotificationId = new Date().getTime();
    const newNotification = {
      id: newNotificationId,
      ...props,
    } as any;
    setNotifications(
      (alertNotifications: any) =>
        [...alertNotifications, newNotification] as any,
    );

    if (duration !== 0) {
      setTimeout(() => remove(newNotificationId), duration);
    }
  };

  // on first render ref is undefined
  // create empty alert helps to fix height error
  useEffect(() => {
    add({
      duration: 1,
    });
  }, []);

  const position = isBrowser && window.innerWidth < 540 ? "top" : "bottom";

  return (
    <NotificationsContext.Provider value={{ add } as any}>
      {children}
      <Overlay
        notifications={notifications}
        remove={remove}
        position={position}
      />
    </NotificationsContext.Provider>
  );
};

const OverlayWrapper = ({ notify = () => ({}) }: { notify: any }) => {
  const position = isBrowser && window.innerWidth < 540 ? "top" : "bottom";

  const [notifications, setNotifications] = useState([]);
  // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
  const remove = (timestampId: number) => {
    setNotifications((alertNotifications) =>
      alertNotifications.filter(
        (alertInfo: any) => alertInfo.id !== timestampId,
      ),
    );
  };

  const add = ({ duration = 8000, ...props }) => {
    // use creation timestamp as psuedo-unique alert object ID
    const newNotificationId = new Date().getTime();
    const newNotification = {
      id: newNotificationId,
      ...props,
    };
    setNotifications((alertNotifications: any) =>
      position === "top"
        ? ([newNotification, ...alertNotifications] as any)
        : ([...alertNotifications, newNotification] as any),
    );

    if (duration !== 0) {
      setTimeout(() => remove(newNotificationId), duration);
    }
  };

  useEffect(() => {
    notify(add, remove);
  }, []);

  return (
    <Overlay
      notifications={notifications}
      remove={remove}
      position={position}
    />
  );
};

export const notificationPortalId = "notification-portal";
class NotifiactionsManager {
  createNotificationFn: any;

  constructor() {
    if (typeof window === "undefined") return;

    let portalElement = document.getElementById(notificationPortalId);

    if (!portalElement) {
      const element = document.createElement("div");

      element.id = notificationPortalId;
      // element.className = notificationsContainerClassName;
      if (document.body) {
        document.body.appendChild(element);
      }

      portalElement = element;
    }

    const portal = ReactDOM.createRoot(portalElement);
    portal.render(<OverlayWrapper notify={this.bindNotify} />);
  }

  bindNotify = (add: any) => {
    this.createNotificationFn = add;
  };

  createNotification(message: NotificationMessage) {
    if (this.createNotificationFn) {
      return this.createNotificationFn(message);
    }
  }
}
const notifiactionsManager = new NotifiactionsManager();

export const createNotification = (message: NotificationMessage) => {
  return notifiactionsManager.createNotification(message);
};
