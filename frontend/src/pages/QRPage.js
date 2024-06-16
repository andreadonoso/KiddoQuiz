import { useParams } from "react-router-dom";
import QRCode from 'qrcode.react';

const QRPage = () => {
	const { slug } = useParams();

	return <div>
		<QRCode size="256" value={`https://kq.fernando.is/quiz-view/${slug}`} />
	</div>;
};

export default QRPage;
