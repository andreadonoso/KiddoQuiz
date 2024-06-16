"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import {
	Box,
	Typography,
	Button,
	List,
	ListItemText,
	ListItem,
	Radio,
	RadioGroup,
	FormControlLabel,
	Toolbar,
	TextField,
} from "@mui/material";

const EditPage = (data) => {
	const [questions, setQuestions] = useState(data.questionsAndAnswers);

	const [form, setForm] = useState({ testName: "", questionsData: [] });

	const handleQuestionChange = (index, newValue) => {
		const updatedQuestions = [...questions];
		updatedQuestions[index].question = newValue;
		setQuestions(updatedQuestions);
	};

	const handleChoiceChange = (questionIndex, choiceIndex) => {
		const updatedAnswers = [...answers];
		updatedAnswers[questionIndex].selectedChoice =
			choices[questionIndex].questionChoices[choiceIndex];
		setAnswers(updatedAnswers);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Header />
			<Toolbar />
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
					sx={{ ml: 3, backgroundColor: "#F7C65F" }}
					variant="contained"
					onClick={() => {}}
				>
					Back
				</Button>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h3" pb={4}>
					Edit Test
				</Typography>

				<Box
					sx={{
						width: "500px",
						bgcolor: "background.paper",
						border: "1px solid #000",
						borderRadius: "3px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						p: 5,
						mb: 10,
					}}
				>
					<TextField
						id="outlined-basic"
						label="Test name"
						fullWidth
						required
						variant="filled"
						value={data.test.name}
						onChange={(e) =>
							setForm({ ...form, testName: e.target.value })
						}
					/>

					<List sx={{ pt: 5 }}>
						{questions.map((question, index) => {
							const labelId = `checkbox-list-label-${index}`;
							return (
								<div key={index}>
									<ListItem sx={{ pt: 3 }}>
										<ListItemText
											id={labelId}
											primary={`${index + 1} `}
										/>
										<TextField
											fullWidth
											required
											variant="filled"
											id="filled-required"
											label={"Question " + `${index + 1}`}
											value={questions[index].question}
											onChange={(e) =>
												handleQuestionChange(
													index,
													e.target.value
												)
											}
											sx={{ ml: 2 }}
										/>
									</ListItem>

									<RadioGroup>
										{question.answers.map((answer) => (
											<FormControlLabel
												key={answer.id}
												control={
													<Radio
														checked={
															answer.is_correct
														}
													/>
												}
												label={
													<TextField
														fullWidth
														required
														variant="filled"
														value={answer.answer}
													/>
												}
												sx={{ pl: 4 }}
											/>
										))}
									</RadioGroup>
								</div>
							);
						})}
					</List>
					<Button sx={{ mt: 5 }} variant="contained" href="/">
						Save
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default EditPage;
