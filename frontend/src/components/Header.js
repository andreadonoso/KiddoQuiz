import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Avatar, CssBaseline } from "@mui/material";
import logo from "../assets/logo.png";

const pages = ["Products", "Pricing", "Blog"] || [];
const settings = ["Profile", "Account", "Dashboard", "Logout"] || [];

function Header() {
	return (
		<>
			<CssBaseline />
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
					<Link to="/">
						<img
							src={logo}
							alt="Logo"
							style={{ height: 40, cursor: "pointer" }}
						/>
					</Link>
					<Avatar>MA</Avatar>
				</Toolbar>
			</AppBar>
		</>
	);
}
export default Header;
