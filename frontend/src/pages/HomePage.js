import * as React from "react";
import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { experimentalStyled as styled } from "@mui/material/styles";
import {
	Box,
	Drawer,
	AppBar,
	useMediaQuery,
	CssBaseline,
	Toolbar,
	List,
	Grid,
	Typography,
	Divider,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Collapse,
	ListSubheader,
	useTheme,
	Avatar,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import logo from "../assets/logo.png";
import samplePic from "../assets/pic.png";

const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const HomePage = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

	const [open, setOpen] = React.useState(true);
	const handleClick = () => {
		setOpen(!open);
	};

	const name = "Maria";
	const className = "New Class";
	var today = new Date();
	var month = today.toLocaleString("default", { month: "short" });
	var day = today.getDate(); // Use getDate() for numeric day
	var year = "20" + today.getFullYear().toString().slice(-2);
	const newPic = "";

	const [cards, setCards] = useState([
		{ date: "Jun 15 2024", className: "History Class", pic: samplePic },
	]);

	const handleCreateQuizClick = () => {
		const newCard = {
			date:
				month.toString() + " " + day.toString() + " " + year.toString(),
			className: className,
			pic: newPic,
		};
		setCards([newCard, ...cards]);
	};

	return (
		<Box sx={{ display: "flex" }}>
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
					<img src={logo} alt="Logo" style={{ height: 40 }} />
					<Avatar>MA</Avatar>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List
						sx={{
							width: "100%",
							maxWidth: 360,
							bgcolor: "background.paper",
						}}
						component="nav"
						aria-labelledby="nested-list-subheader"
					>
						<ListItemButton onClick={handleClick}>
							<ListItemText
								primary=<Typography
									variant="body1"
									fontWeight="bold"
								>
									Your Classes
								</Typography>
							/>
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{["Class 1", "Class 2", "Class 3"].map(
									(text, index) => (
										<ListItem key={text} disablePadding>
											<ListItemButton>
												<ListItemText primary={text} />
											</ListItemButton>
										</ListItem>
									)
								)}
							</List>
						</Collapse>
					</List>
					<Divider />
					<List>
						{[
							<Typography variant="body1" fontWeight="bold">
								Your Reports
							</Typography>,
						].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{[
							<Typography variant="body1" fontWeight="bold">
								Your Dashboard
							</Typography>,
						].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Box
					sx={{
						display: "flex",
						flexDirection: isSmallScreen ? "column" : "row",
						justifyContent: "space-between",
						alignItems: isSmallScreen ? "start" : "end",
					}}
					mb={4}
				>
					<Typography variant={isSmallScreen ? "h5" : "h4"}>
						Welcome {name ? name : "Prof"}!
					</Typography>
					<Typography variant={isSmallScreen ? "h6" : "h5"}>
						Your Quizzes
					</Typography>
				</Box>

				<Grid
					container
					spacing={{ xs: 2, md: 5 }}
					columns={{
						xs: 4,
						sm: 4,
						md: 8,
						lg: 12,
						xl: 16,
					}}
				>
					<Grid item xs={4} sm={4} md={4}>
						<Card
							sx={{
								maxWidth: 345,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								height: "100%",
								border: "1px solid #000",
								borderRadius: 3,
								cursor: "pointer",
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.03)",
								},
							}}
							elevation={0}
							onClick={handleCreateQuizClick}
						>
							<CardContent>
								<AddRoundedIcon
									sx={{ fontSize: "90px", m: 2 }}
								/>
								<Typography
									gutterBottom
									variant="h4"
									component="div"
								>
									Create Quiz
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					{cards.map((card, index) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
							<Card
								sx={{
									maxWidth: 345,
									border: "1px solid #000",
									borderRadius: 3,
								}}
								elevation={0}
							>
								<CardMedia
									sx={{ height: 140, cursor: "pointer" }}
									image={card.pic ? card.pic : samplePic}
								/>
								<CardContent
									sx={{
										cursor: "pointer",
										"&:hover": {
											backgroundColor:
												"rgba(0, 0, 0, 0.03)",
										},
									}}
								>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										{card.date}
									</Typography>
									<Typography
										gutterBottom
										variant="h6"
										component="div"
									>
										{card.className}
									</Typography>
								</CardContent>
								<Divider />
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<Button size="small">View Grades</Button>
									<Button size="small">Share</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default HomePage;
