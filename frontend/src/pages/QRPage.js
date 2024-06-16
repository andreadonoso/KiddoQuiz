import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import { Box, Typography } from "@mui/material";
import mascotsLeft from "../assets/mascotsLeft.png";
import mascotsRight from "../assets/mascotsRight.png";

const QRPage = () => {
	const { slug } = useParams();
	const className = "";

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#AED9FC",
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
					Join the quiz!
				</Typography>

				{/* INSERT QR CODE HERE */}

				<Typography variant="h5" p={5}>
					{className ? className : "Miami History"}
				</Typography>
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
					zIndex: 0,
				}}
			>
				<img
					src={mascotsLeft}
					alt="Mascot"
					style={{
						height: "25vw",
						objectFit: "contain",
					}}
				/>
				<img
					src={mascotsRight}
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

export default QRPage;
