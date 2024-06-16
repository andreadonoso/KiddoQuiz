const ScoresPage = (data) => {
  const questions = data.questionsAndAnswers;

  return (
    <div>
      <h1>{data.test.title}</h1>
      <ul>
        {questions.map((qa, index) => {
          const totalChoices = qa.answers.reduce((sum, answer) => sum + answer.choices, 0);

          return (
            <li key={index}>
              <h3>{qa.question}</h3>
              <ul>
                {qa.answers.map((answer, index) => {
                  const styling = answer.is_correct ? { color: "green" } : { color: "red" };
                  const percentage = totalChoices == 0 ? 0 : ((answer.choices / totalChoices) * 100).toFixed(2);

                  return (
                    <li key={index} style={styling}>
                      <strong>{answer.answer}</strong> — {answer.choices} ({percentage}%)
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScoresPage;