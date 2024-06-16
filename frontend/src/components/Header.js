import * as React from "react";
import { AppBar, Toolbar, Avatar } from "@mui/material";
import logo from "../assets/logo.png";

const pages = ["Products", "Pricing", "Blog"] || [];
const settings = ["Profile", "Account", "Dashboard", "Logout"] || [];

function Header() {
	return (
		<AppBar
			position="fixed"
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
				backgroundColor: "#ffffff",
				borderBottom: "1px solid #000",
			}}
			elevation={0}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<img src={logo} alt="Logo" style={{ height: 40 }} />
				<Avatar>MA</Avatar>
			</Toolbar>
		</AppBar>
	);
}
export default Header;
