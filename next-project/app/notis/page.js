"use client";
import Notification from "@/components/ui/notification";
import { useContext } from "react";
import { NotificationContext } from "@/store/notification-context";

const Notis = () => {
  const { state } = useContext(NotificationContext);

  return (
    <div>
      {state && (
        <Notification
          title={state.title}
          message={state.message}
          status={state.status}
        ></Notification>
      )}
    </div>
  );
};

export default Notis;
