'use client'
import { createContext, useState } from "react"

// 알람 context 객체 
const NotificationContext = createContext( 
    {
        notification : {title:"test", message:"test", status:"success"},
        showNotification : (notificationData) => {},
        hideNotification : () => {},
    }
);

// context provider
export const NotificationProvider = (props) => {
    
    const [activeNotification, setActiveNotification] = useState(NotificationContext);

    console.log(`notis provider !!`)

    const showNotificationHandler = (notificationData) => {
        setActiveNotification({
            title:notificationData.title,
            message:notificationData.message,
            status:notificationData.status,
        })
        console.log(`show notis handler?${activeNotification}`);
    }

    const hideNotificationHandler = () => {
        setActiveNotification(null)
    }

    // 현자 상태, show handler, hide handler 를 자식들에게 전달 
    const context = {
        norification:activeNotification, 
        showNotification:showNotificationHandler, 
        hideNotification:hideNotificationHandler,
    };

    
    //provider에 의해 감싸진 컴포넌트들은 value값으로 전달된 context를 조회하고 사용할 수 있다.
    return (
        <>
         <NotificationContext.Provider value={context}> 
           {props.children}
          </NotificationContext.Provider>
        </>
    );
}

export default NotificationContext;