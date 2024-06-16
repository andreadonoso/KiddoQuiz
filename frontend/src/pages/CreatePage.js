import React, { useState, useRef } from "react";
import { Box, Typography, Button, Toolbar, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import mascotUpload from "../assets/mascotUpload.png";
import mascotUploadSuccess from "../assets/mascotUploadSuccess.png";
import UploadFile from "../components/UploadFile";
import SelectTemplate from "../components/SelectTemplate";
import PreviewTest from "../components/PreviewTest";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

const CreatePage = () => {
	const [title, setTitle] = useState("Upload File");
	const [data, setData] = useState("");
	const [checked, setChecked] = useState(true);

	const handleClick = (title, data) => {
		setChecked((prev) => !prev);
		setTimeout(() => {
			setChecked((prev) => !prev);
			setTitle(title);
			if (data) setData(data);
		}, 300);
	};

	return (
		<>
			<Header />
			<Fade in={checked} timeout={500}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Toolbar />
					{title === "Upload File" && (
						<UploadFile handleClick={handleClick} />
					)}
					{title === "Select Template" && (
						<SelectTemplate handleClick={handleClick} />
					)}
					{title === "Preview Test" && (
						<PreviewTest handleClick={handleClick} />
					)}
				</Box>
			</Fade>
		</>
	);
};

export default CreatePage;
