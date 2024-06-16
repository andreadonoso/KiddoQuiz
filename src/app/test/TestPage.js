"use client";

import React, { useState, useRef } from "react";
import {
	Box,
	Typography,
	Button,
	Toolbar,
	Fade,
	List,
	ListItemText,
	ListItemIcon,
	ListItem,
	ListItemButton,
	Checkbox,
	Radio,
	RadioGroup,
	FormControlLabel,
	TextField,
} from "@mui/material";
import mascotsLeft from "@/assets/mascotsLeft.png";
import mascotsRight from "@/assets/mascotsRight.png";

const TestPage = () => {
	const testName = "";

	const [formData, setFormData] = useState([]);

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

	const [studentName, setStudentName] = useState("");
	const handleChange = (event) => {
		setStudentName(event.target.value);
	};

	const [answers, setAnswers] = useState(Array(questions.length).fill(""));

	const allQuestionsAnswered = answers.every((answer) => answer !== "");

	const handleAnswerChange = (questionIndex, choice) => {
		const newAnswers = [...answers];
		newAnswers[questionIndex] = choice;
		setAnswers(newAnswers);
		console.log(newAnswers);
	};

	const handleSubmit = () => {
		const answeredData = questions.map((question, index) => ({
			question: question.question,
			answer: answers[index] || "",
		}));
		console.log("Answered Data:", answeredData);

		setFormData([{ studentName: studentName, answers: answeredData }]);
		console.log(formData);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100vh",
				mt: 15,
				mb: 15,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "500px",
					backgroundColor: "white",
					border: "1px solid #000",
					pl: 5,
					pr: 5,
				}}
				elevation={10}
			>
				<Typography variant="h3" pb={4} pt={4}>
					{testName ? testName : "Test Name"}
				</Typography>
				<TextField
					fullWidth
					required
					variant="filled"
					id="filled-required"
					label="Your full name"
					placeholder="Ex: Kiddo Jr. Quizziam"
					onChange={handleChange}
					value={studentName}
				/>
				<Typography variant="h5" pb={4} pt={4}>
					Please read and answer the questions below.
				</Typography>

				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
					}}
				>
					{questions.map((question, index) => {
						const labelId = `checkbox-list-label-${index}`;
						return (
							<div key={index}>
								<ListItem disablePadding>
									<ListItemText
										id={labelId}
										primary={`${index + 1}. ${
											question.question
										}`}
									/>
								</ListItem>

								<RadioGroup
									value={answers[index] || ""}
									onChange={(event) =>
										handleAnswerChange(
											index,
											event.target.value
										)
									}
								>
									{choices[index]?.questionChoices.map(
										(choice, choiceIndex) => (
											<FormControlLabel
												key={choiceIndex}
												value={choice}
												control={<Radio />}
												label={choice}
												sx={{ pl: 4 }}
											/>
										)
									)}
								</RadioGroup>
							</div>
						);
					})}
				</List>
				<Button
					sx={{ mt: 5, mb: 5 }}
					variant="contained"
					onClick={() => {
						handleSubmit();
					}}
					fullWidth
					disabled={!studentName || !allQuestionsAnswered}
					type="submit"
				>
					Submit
				</Button>
			</Box>
			<Box
				sx={{
					position: "fixed",
					bottom: 40,
					left: 35,
					right: 35,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end",
					zIndex: -1,
				}}
			>
				<img
					src={mascotsLeft.src}
					alt="Mascot"
					style={{
						height: "25vw",
						objectFit: "contain",
					}}
				/>
				<img
					src={mascotsRight.src}
					alt="Mascot"
					style={{
						height: "15vw",
						objectFit: "contain",
					}}
				/>
			</Box>
		</Box>
	);
};

export default TestPage;
