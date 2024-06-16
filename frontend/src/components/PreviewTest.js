import React, { useState, useRef } from "react";
import { Box, Typography, Button, Toolbar, Fade, List } from "@mui/material";
import { Link } from "react-router-dom";

const PreviewTest = ({ handleClick }) => {
	const [questions, setQuestions] = useState([
		{ question: "Quiz question number one?" },
		{ question: "Quiz question number two?" },
		{ question: "Quiz question number three?" },
	]);
	const [choices, setChoices] = useState([
		{ questionChoices: ["Choice 1", "Choice 2", "Choice 3"] },
		{ questionChoices: ["Choice 1", "Choice 2", "Choice 3"] },
		{ questionChoices: ["Choice 1", "Choice 2", "Choice 3"] },
	]);
	const [answers, setAnswers] = useState([
		{ answer: "Answer number one" },
		{ answer: "Answer number two" },
		{ answer: "Answer number three" },
	]);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
				}}
				m={3}
			>
				<Button
					sx={{ ml: 3 }}
					variant="contained"
					color="secondary"
					onClick={() => {
						handleClick("Select Template");
						// alert("Warning: all changes will be lost");
					}}
				>
					Back
				</Button>
			</Box>
			<Typography variant="h3" pb={4}>
				Preview Test
			</Typography>
			<Typography variant="h5" pb={4}>
				Check the information below to continue.
			</Typography>
			<Button
				sx={{ mt: 5, mb: 5 }}
				variant="contained"
				onClick={() => {}}
			>
				Save
			</Button>
		</>
	);
};

export default PreviewTest;
