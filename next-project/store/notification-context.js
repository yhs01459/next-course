"use client";
import { createContext, useState } from "react";

// 알람 context 객체
export const NotificationContext = createContext({
  state: { title: "empty", message: "empty", status: "empty" },
  action: {
    showNotification: (notificationData) => {},
    hideNotification: () => {},
  },
});

// context provider
export const NotificationProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState({
    title: "test1",
    message: "test1",
    statue: "success",
  });

  const showNotificationHandler = (notificationData) => {
    setActiveNotification({
      title: notificationData.title,
      message: notificationData.message,
      status: notificationData.status,
    });
    console.log(`show notis handler?${notificationData.title}`);
  };

  const hideNotificationHandler = () => {
    setActiveNotification({});
  };

  // 현자 상태, show handler, hide handler 를 자식들에게 전달

  console.log(`현재 알림 상태는 ? ${activeNotification.notification}`);

  const context = {
    state: activeNotification,
    action: {
      showNotification: showNotificationHandler,
      hideNotification: hideNotificationHandler,
    },
  };

  //provider에 의해 감싸진 컴포넌트들은 value값으로 전달된 context를 조회하고 사용할 수 있다.
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};
