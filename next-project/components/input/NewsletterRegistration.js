"use client";
import classes from "./NewsletterRegistration.module.css";
import { useRef, useContext } from "react";
import { NotificationContext } from "@/store/notification-context";

function NewsletterRegistration() {
  const inputEmail = useRef();
  const { action } = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    console.log(`버튼 클릭`);

    action.showNotification({
      title: "연결 중",
      message: "연결 중",
      status: "pending",
    });
    // console.log(`연결중입니다${title}`);

    const jData = {
      id: inputEmail.current.value,
      email: inputEmail.current.value,
    };

    fetch("/api", {
      method: "POST",
      body: JSON.stringify(jData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        action.showNotification({
          title: "성공",
          message: "데이터 저장 완료",
          status: "success",
        });
        // console.log(`연결 후 입니다. ${title}`);
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={inputEmail}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
