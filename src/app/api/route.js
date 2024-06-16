// pages/api/route.js
import { pocketBase } from "@/utils/pocketbase"; // Adjust the path as needed
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const pb = await pocketBase();
    const buffers = [];
    for await (const chunk of req.body) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString('utf8');
    const answerData = JSON.parse(data);

    // Update the record in PocketBase	const answers = answerData.answers;
    for (const answerId of answerData.answers) {
      console.log(`updating answer: ${answerId}`);
      const updatedAnswer = await pb.collection("answers").update(answerId, {
        "choices+": 1,
      });
      console.log(updatedAnswer);
    }
    return NextResponse.json("GOOD");
  } catch (error) {
    console.error(error)
    return NextResponse.json("BAD");
    // Send an error response
  }
}
