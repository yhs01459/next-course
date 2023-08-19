"use client";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";

export default function Home() {
  const myEmail = useRef();
  const myFeedback = useRef();

  const submitHnadler = (event) => {
    event.preventDefault();

    const getFormData = {
      id: String(Date()),
      email: myEmail.current.value,
      feedback: myFeedback.current.value,
    };

    console.log(getFormData);

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(getFormData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json()) // json 응답을 받습니다.
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={submitHnadler}>
        <div>
          <label htmlFor="email">input your email</label>
          <input type="email" id="email" ref={myEmail}></input>
        </div>
        <div>
          <label htmlFor="feedback">inpuut feedback</label>
          <textarea id="feedback" ref={myFeedback}></textarea>
        </div>
        <button>submit</button>
      </form>
      <Link href="/feedback">데이터 목록</Link>
    </div>
  );
}
