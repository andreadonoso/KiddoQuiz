import React, { useState, useRef } from "react";
import {
	Box,
	Typography,
	Button,
	Toolbar,
	Fade,
	Grid,
	Card,
	CardContent,
	CardMedia,
	CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import mascotUpload from "../assets/mascotUpload.png";
import mascotUploadSuccess from "../assets/mascotUploadSuccess.png";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import samplePic from "../assets/pic.png";

const SelectTemplate = ({ handleClick }) => {
	const [suggested, setSuggested] = useState([
		{ templateName: "Suggested Template Name", pic: samplePic },
		{ templateName: "Suggested Template Name", pic: samplePic },
		{ templateName: "Suggested Template Name", pic: samplePic },
		{ templateName: "Suggested Template Name", pic: samplePic },
		{ templateName: "Suggested Template Name", pic: samplePic },
		{ templateName: "Suggested Template Name", pic: samplePic },
	]);

	const [templates, setTemplates] = useState([
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
		{ templateName: "Template Name", pic: samplePic },
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
						handleClick("Upload File");
						// alert("Warning: all changes will be lost");
					}}
				>
					Back
				</Button>
			</Box>

			<Typography variant="h3" pb={3}>
				Select a Test Template
			</Typography>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					alignItems: "center",
					width: "100%",
					backgroundColor: "#AED9FC",
					pt: 4,
					pb: 4,
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						pb: 3,
					}}
				>
					<AutoAwesomeIcon sx={{ mr: 2 }} />
					<Typography variant="h6">
						AI suggestions based on the content of your upload.
					</Typography>
				</Box>

				<Box
					sx={{
						pl: 5,
						pr: 5,
					}}
				>
					<Grid
						container
						spacing={{ xs: 4, md: 5 }}
						columns={{
							xs: 4,
							sm: 4,
							md: 8,
							lg: 12,
						}}
					>
						{suggested.map((card, index) => (
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								key={index}
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Card
									sx={{
										width: 345,
										border: "1px solid #000",
										borderRadius: 3,
									}}
									elevation={0}
								>
									<CardMedia
										sx={{ height: 150, cursor: "pointer" }}
										image={card.pic ? card.pic : samplePic}
									/>

									<CardActions
										sx={{
											display: "flex",
											justifyContent: "center",
											cursor: "pointer",
											"&:hover": {
												backgroundColor:
													"rgba(0, 0, 0, 0.03)",
											},
										}}
									>
										<Typography
											variant="h6"
											component="div"
										>
											{card.templateName}
										</Typography>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					alignItems: "center",
					width: "100%",
					pt: 4,
					pb: 4,
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						pb: 3,
					}}
				>
					<Typography variant="h6">All templates.</Typography>
				</Box>

				<Box
					sx={{
						pl: 5,
						pr: 5,
					}}
				>
					<Grid
						container
						spacing={{ xs: 4, md: 5 }}
						columns={{
							xs: 4,
							sm: 4,
							md: 8,
							lg: 12,
						}}
					>
						{templates.map((card, index) => (
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								key={index}
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Card
									sx={{
										width: 345,
										border: "1px solid #000",
										borderRadius: 3,
									}}
									elevation={0}
								>
									<CardMedia
										sx={{ height: 140, cursor: "pointer" }}
										image={card.pic ? card.pic : samplePic}
									/>
									<CardActions
										sx={{
											display: "flex",
											justifyContent: "center",
											cursor: "pointer",
											"&:hover": {
												backgroundColor:
													"rgba(0, 0, 0, 0.03)",
											},
										}}
									>
										<Typography
											variant="h6"
											component="div"
										>
											{card.templateName}
										</Typography>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>

			<Button
				sx={{ mb: 5, mt: 1 }}
				variant="contained"
				onClick={() => {
					handleClick("Preview Test");
					setTimeout(() => {
						window.scrollTo(0, 0);
					}, 298);
				}}
			>
				Continue
			</Button>
		</>
	);
};

export default SelectTemplate;
