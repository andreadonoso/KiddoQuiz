"use client";

import QRCode from "qrcode.react";
import { Box, Typography } from "@mui/material";
import mascot from "@/assets/mascot.png";
const CompletedPage = () => {
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
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					zIndex: 50,
				}}
			>
				<Typography variant="h3" p={5}>
					<strong>Quiz Completed!</strong>
				</Typography>
			</Box>

			<img
				src={mascot.src}
				alt="Mascot"
				style={{
					height: "25vw",
					objectFit: "contain",
				}}
			/>
		</Box>
	);
};

export default CompletedPage;
