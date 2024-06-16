import { pocketBase } from "@/utils/pocketbase";

const seedData = {
  classes: [
    {
      name: "Hack in Miami",
      tests: [
        {
          name: "History of Miami",
          questions: [
            {
              question:
                "In which year was the city of Miami officially incorporated?",
              answers: [
                { answer: "1866", is_correct: false },
                { answer: "1886", is_correct: false },
                { answer: "1896", is_correct: true },
                { answer: "1906", is_correct: false },
              ],
            },
            {
              question:
                "Who is often referred to as the “Mother of Miami” for her pivotal role in its development?",
              answers: [
                { answer: "Mary Brickell", is_correct: false },
                { answer: "Julia Tuttle", is_correct: true },
                { answer: "Marjory Stoneman Douglas", is_correct: false },
                { answer: "Elizabeth Plummer", is_correct: false },
              ],
            },
            {
              question:
                "Which famous hotel, opened in 1926, is considered an architectural landmark in Miami Beach?",
              answers: [
                { answer: "The Fontainebleau", is_correct: false },
                { answer: "The Biltmore", is_correct: true },
                { answer: "The Deauville", is_correct: false },
                { answer: "The Colony", is_correct: false },
              ],
            },
            {
              question:
                "What major event in 1926 caused significant damage and loss of life in Miami?",
              answers: [
                { answer: "A massive fire", is_correct: false },
                { answer: "An earthquake", is_correct: false },
                { answer: "The Great Miami Hurricane", is_correct: true },
                { answer: "A flood", is_correct: false },
              ],
            },
            {
              question:
                "Which industry saw a boom in Miami during the early 20th century, greatly influencing its growth?",
              answers: [
                { answer: "Agriculture", is_correct: false },
                { answer: "Textile manufacturing", is_correct: false },
                { answer: "Tourism", is_correct: true },
                { answer: "Shipbuilding", is_correct: false },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export async function seedDatabase() {
  const pb = await pocketBase();

  for (const classData of seedData.classes) {
    const testIds = [];

    for (const test of classData.tests) {
      const questionIds = [];

      for (const question of test.questions) {
        const answerIds = [];

        for (const answer of question.answers) {
          const answerRecord = await pb.collection("answers").create({
            answer: answer.answer,
            correct: answer.is_correct,
          });
          answerIds.push(answerRecord.id);
        }

        const questionRecord = await pb.collection("questions").create({
          question: question.question,
          answers: answerIds,
        });
        questionIds.push(questionRecord.id);
      }

      const testRecord = await pb.collection("tests").create({
        name: test.name,
        questions: questionIds,
      });
      testIds.push(testRecord.id);
    }

    await pb.collection("classes").create({
      name: classData.name,
      tests: testIds,
    });
  }
}
