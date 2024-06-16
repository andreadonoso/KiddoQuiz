import { Box, Typography } from "@mui/material";
import mascot from "../assets/mascot.png";

const QuizCompletedPage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#A8E3B7",
				width: "100%",
				height: "100vh",
			}}
		>
			<Typography variant="h3" p={5}>
				Quiz Completed!
			</Typography>
			<img src={mascot} alt="Mascot" style={{ height: "50%" }} />
		</Box>
	);
};

export default QuizCompletedPage;
