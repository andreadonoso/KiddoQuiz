"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/Header";
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

const EditPage = () => {
	// const [form, setForm] = useState([testName]);
	const [questions, setQuestions] = useState([
		{ question: "Question number one?" },
		{ question: "Question number two?" },
		{ question: "Question number three?" },
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

	const [checked, setChecked] = React.useState([0]);

	const [selectedChoices, setSelectedChoices] = useState({});

	const handleChoiceChange = (questionIndex, choice) => {
		setSelectedChoices((prev) => ({
			...prev,
			[questionIndex]: choice,
		}));
	};

	return (
		<>
			<Header />
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
				Edit Test
			</Typography>
			<TextField
				id="outlined-basic"
				label="Test name"
				variant="outlined"
			/>

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
									primary={`${index + 1} `}
								/>
								<TextField
									id="outlined-basic"
									label="Test name"
									// variant="default"
									defaultValue={question.question}
								/>
							</ListItem>

							<RadioGroup
								value={selectedChoices[index] || ""}
								onChange={(event) =>
									handleChoiceChange(
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
				onClick={() => {}}
			>
				Save
			</Button>
		</>
	);
};

export default EditPage;
