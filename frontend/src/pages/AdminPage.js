import { useContext, useEffect, useState } from "react";
import { PocketBaseContext, POCKETBASE_BASE_URL } from "../PocketBaseContext";

const Admin = () => {
  const pb = useContext(PocketBaseContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classes = await pb.collection("classes").getFullList({
          sort: "-created",
          expand: "tests",
        });

        const classList = await Promise.all(
          classes.map(async (classItem) => {
            const tests = await Promise.all(
              classItem.expand.tests.map(async (test) => {
                const questions = await Promise.all(
                  test.questions.map(async (questionId) => {
                    const questionRecord = await pb
                      .collection("questions")
                      .getOne(questionId, {
                        expand: "answers",
                      });

                    const answers = await Promise.all(
                      questionRecord.answers.map(async (answerId) => {
                        return await pb.collection("answers").getOne(answerId);
                      })
                    );

                    return {
                      id: questionRecord.id,
                      question: questionRecord.question,
                      answers: answers,
                    };
                  })
                );

                return {
                  collectionId: test.collectionId,
                  id: test.id,
                  name: test.name,
                  cover: test.cover,
                  questions: questions,
                };
              })
            );

            return {
              id: classItem.id,
              name: classItem.name,
              tests: tests,
            };
          })
        );

        setClasses(classList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClasses();
  }, [pb]);

  return (
    <>
      <h1>Admin</h1>

      <fieldset>
        <legend>Classes</legend>
        {classes.map((classItem) => (
          <div key={classItem.id}>
            <h1>{classItem.name}</h1>
            <fieldset>
              <legend>Tests</legend>

              {classItem.tests.map((test) => (
                <div key={test.id}>
                  <img
                    width="256"
                    src={`${POCKETBASE_BASE_URL}/api/files/${test.collectionId}/${test.id}/${test.cover}`}
                  />
                  <h2>{test.name}</h2>

                  <a href={`/quiz-view/${test.id}`} target="_blank">
                    Quiz View
                  </a>
                  <a href={`/qr/${test.id}`} target="_blank">
                    QR Code
                  </a>

                  <fieldset>
                    <legend>Questions</legend>
                    {test.questions.map((question) => (
                      <div key={question.id}>
                        <h3>{question.question}</h3>
                        <ul>
                          {question.answers.map((answer) => (
                            <li key={answer.id}>{answer.answer}</li>
                          ))}
                        </ul>
                        <hr />
                      </div>
                    ))}
                  </fieldset>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default Admin;
