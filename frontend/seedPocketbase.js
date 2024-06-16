const demoQuestions = [
  {
    question: "In which year was the city of Miami officially incorporated?",
    answers: [
      { answer: "1866", choices: 0, is_correct: false },
      { answer: "1886", choices: 0, is_correct: false },
      { answer: "1896", choices: 0, is_correct: true },
      { answer: "1906", choices: 0, is_correct: false },
    ],
  },
  {
    question:
      "Who is often referred to as the “Mother of Miami” for her pivotal role in its development?",
    answers: [
      { answer: "Mary Brickell", choices: 0, is_correct: false },
      { answer: "Julia Tuttle", choices: 0, is_correct: true },
      { answer: "Marjory Stoneman Douglas", choices: 0, is_correct: false },
      { answer: "Elizabeth Plummer", choices: 0, is_correct: false },
    ],
  },
  {
    question:
      "Which famous hotel, opened in 1926, is considered an architectural landmark in Miami Beach?",
    answers: [
      { answer: "The Fontainebleau", choices: 0, is_correct: false },
      { answer: "The Biltmore", choices: 0, is_correct: true },
      { answer: "The Deauville", choices: 0, is_correct: false },
      { answer: "The Colony", choices: 0, is_correct: false },
    ],
  },
  {
    question:
      "What major event in 1926 caused significant damage and loss of life in Miami?",
    answers: [
      { answer: "A massive fire", choices: 0, is_correct: false },
      { answer: "An earthquake", choices: 0, is_correct: false },
      { answer: "The Great Miami Hurricane", choices: 0, is_correct: true },
      { answer: "A flood", choices: 0, is_correct: false },
    ],
  },
  {
    question:
      "Which industry saw a boom in Miami during the early 20th century, greatly influencing its growth?",
    answers: [
      { answer: "Agriculture", choices: 0, is_correct: false },
      { answer: "Textile manufacturing", choices: 0, is_correct: false },
      { answer: "Tourism", choices: 0, is_correct: true },
      { answer: "Shipbuilding", choices: 0, is_correct: false },
    ],
  },
];

const PocketBase = require("pocketbase/cjs");

async function run() {
  const POCKETBASE_BASE_URL = "http://127.0.0.1:8090";
  const pb = new PocketBase(POCKETBASE_BASE_URL);
  await pb.admins.authWithPassword("admin@kiddoquiz.loc", "supersecret");

  for (const question of demoQuestions) {
    const answerIds = [];

    for (const answer of question.answers) {
      const answerRecord = await pb
        .collection("answers")
        .create(JSON.stringify(answer));
      answerIds.push(answerRecord.id);
    }

    await pb.collection('questions').create(JSON.stringify({
      question: question.question,
      answers: answerIds
    }));
  }
}

run();
