import TestPage from "./TestPage";
import { pocketBase } from "@/utils/pocketbase";

async function getTest() {
  const pb = await pocketBase();
  const test = await pb.collection('tests').getFullList({
    expand: "questions",
    sort: "-created",
  });
  return test[0];
}

async function getQuestionsAndAnswers(test) {
  const pb = await pocketBase();
  const questions = test.expand.questions;
  const questionsAndAnswers = [];

  for (const question of questions) {
    const questionAndAnswers = await pb.collection('questions').getOne(question.id, { expand: "answers" });
    questionsAndAnswers.push({
      question: questionAndAnswers.question,
      answers: questionAndAnswers.expand ? questionAndAnswers.expand.answers : [],
    });
  }
  return questionsAndAnswers;
}

export default async function Test() {
  const test = await getTest();
  const questionsAndAnswers = await getQuestionsAndAnswers(test);
  return <TestPage />;
}
