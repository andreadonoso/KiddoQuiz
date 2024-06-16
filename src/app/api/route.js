// pages/api/update-test.js
import { pocketBase } from "@/utils/pocketbase"; // Adjust the path as needed
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const pb = await pocketBase();

    // body.req is a readable stream, so we need to parse it

    console.log("req.body", req.body);
    // req.body ReadableStream { locked: false, state: 'readable', supportsBYOB: false }
    const body = JSON.parse(req.body);
    console.log("body", body);

    console.log("answerData", answerData);

    // Update the record in PocketBase	const answers = answerData.answers;
    // for (const answerId of answers) {
    //   console.log(`updating answer: ${answerId}`);
    //   const updatedAnswer = await pb.collection("answers").update(answerId, {
    //     "choices+": 1,
    //   });
    //   console.log(updatedAnswer);
    // }

    // Send a success response
    return NextResponse.json("GOOD");
  } catch (error) {
    console.error(error)
    return NextResponse.json("BAD");
    // Send an error response
  }
}
