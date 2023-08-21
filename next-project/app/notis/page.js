'use client';
import Notification from "@/components/ui/notification";
import { useContext } from "react";
import NotificationContext from "@/store/notification-context";

const Notis = () => {
    const ctx = useContext(NotificationContext);
    const activeNotis = ctx.notification;

    return(
        <div>
            {activeNotis && <Notification title={activeNotis.title} message={activeNotis.message} status={activeNotis.status}>
           </Notification>}
        </div>
     )
}

export default Notis;