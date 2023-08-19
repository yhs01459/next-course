import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request) {
  const requestData = await request.json(); //request 스트럼을 다 읽은 후 body의 텍스트를 반환
  const email = requestData.email;
  const feedback = requestData.feedback;
  const id = requestData.id;

  const newData = {
    id: id,
    email: email,
    feedback: feedback,
  };

  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const data = JSON.parse(fs.readFileSync(filePath));
  data.push(newData);
  fs.writeFileSync(filePath, JSON.stringify(data));
  return NextResponse.json({ message: "succes" });
}

export async function GET(request) {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const data = JSON.parse(fs.readFileSync(filePath));
  return NextResponse.json(data);
}
