'use client'

import { formatDistance } from "date-fns";

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
  useTheme,
  Avatar,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import logo from "../assets/logo.png";
import { useState } from "react";
import { getImageURL } from "@/utils/pocketbase";

export default function HomePage({classList}) {

  console.log(classList)
  const drawerWidth = 240;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const name = "";
  const className = "";
  const date = "";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo.src} alt="Logo" style={{ height: 40 }} />
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
                primary=<Typography variant="body1" fontWeight="bold">
                  Your Classes
                </Typography>
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {classList.map(({id, name}) => (
                  <ListItem key={id} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                ))}
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
            Welcome {name ? name : "Prof!"}
          </Typography>
          <Typography variant={isSmallScreen ? "h6" : "h5"}>
            Your Quizzes
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 2, md: 8, lg: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
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
              }}
              elevation={0}
            >
              <CardContent>
                <AddRoundedIcon sx={{ fontSize: "90px" }} />
                <Typography gutterBottom variant="h4" component="div">
                  Create Quiz
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {classList[0].expand.tests.map((test) => (
            <Grid item xs={2} sm={4} md={4} key={test.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={getImageURL(test.collectionId, test.id, test.cover)} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {formatDistance(test.updated, new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {test.name}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button size="small" href={`/quiz/edit/${test.id}`}>Edit</Button>
                  <Button size="small" href={`/quiz/scores/${test.id}`}>Scores</Button>
                  <Button size="small" href={`/quiz/qr/${test.id}`}>Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
