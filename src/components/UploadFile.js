import React, { useState, useRef } from "react";
import { Box, Typography, Button, Toolbar, Fade } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import mascotUpload from "../assets/mascotUpload.png";
import mascotUploadSuccess from "../assets/mascotUploadSuccess.png";

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

const UploadPage = ({ handleClick }) => {
	const [file, setFile] = useState("");
	const handleUpload = (event) => {
		const newFile = event.target.files[0];
		setFile(newFile);
	};

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
					href="/"
				>
					Back
				</Button>
			</Box>
			<Typography variant="h3" pb={3}>
				Upload File
			</Typography>
			<Fade in={!file} timeout={1000}>
				<Button
					component="label"
					variant="outlined"
					tabIndex={-1}
					sx={{
						p: 3,
						display: file ? "none" : "block",
						borderRadius: 3,
					}}
				>
					<img
						src={mascotUpload.src}
						alt="Upload"
						style={{ height: "300px", maxWidth: "100%" }}
					/>
					<VisuallyHiddenInput
						id="file-upload-input"
						type="file"
						onChange={handleUpload}
						accept=".jpeg,.png,.pdf"
					/>
				</Button>
			</Fade>
			<Fade in={!!file} timeout={1000}>
				<Button
					component="label"
					variant="outlined"
					tabIndex={-1}
					sx={{
						p: 3,
						display: !file ? "none" : "block",
						borderRadius: 3,
					}}
				>
					<img
						src={mascotUploadSuccess.src}
						alt="Change file?"
						style={{ height: "300px", maxWidth: "100%" }}
					/>
					<VisuallyHiddenInput
						id="file-upload-input"
						type="file"
						onChange={handleUpload}
					/>
				</Button>
			</Fade>
			<Typography color="text.secondary" mt={5}>
				Files accepted: PDFs, PNGs, JPEGs
			</Typography>
			<Typography color="text.secondary" mb={5}>
				Max File upload 50mb
			</Typography>
			<Button
				variant="contained"
				disabled={
					!file ||
					!["application/pdf", "image/png", "image/jpeg"].includes(
						file.type
					)
				}
				onClick={() => {
					handleClick("Select Template");
				}}
			>
				Continue
			</Button>
		</>
	);
};

export default UploadPage;
