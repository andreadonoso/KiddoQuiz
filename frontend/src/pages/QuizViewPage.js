import { useParams } from "react-router-dom";

const QuizViewPage = () => {
	const { slug } = useParams();

	return <div>Viewing test id: {slug}</div>;
};

export default QuizViewPage;
