import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request) {
  const requestData = await request.json(); //request 스트럼을 다 읽은 후 body의 텍스트를 반환

  if (request.method === "POST") {
    const email = requestData.email;
    const feedback = requestData.feedback;

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const data = JSON.parse(fs.readFileSync(filePath));

    const newData = {
      email: email,
      feedback: feedback,
    };

    data.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(data));

    return NextResponse.json({ message: "succes" });
  } else {
  }
}
