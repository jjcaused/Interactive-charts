import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PublicIcon from "@mui/icons-material/Public";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from "@mui/icons-material/Category";
import FlagIcon from "@mui/icons-material/Flag";
import SourceIcon from "@mui/icons-material/Source";
import FactoryIcon from "@mui/icons-material/Factory";
import TopicIcon from "@mui/icons-material/Topic";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const naviagte = useNavigate();

  return (
    <sideNavBar>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            bgcolor: "#242424",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <TextField
              id="outlined-basic"
              variant="standard"
              InputProps={{
                startAdornment: <SearchIcon />,

                disableUnderline: true,
              }}
              sx={{
                bgcolor: "white",
                width: 600,
                height: "inherit",
                boxSizing: "border-box",
                marginLeft: 0,
                "& fieldset": { border: "none" },
                padding: 1,
              }}
            />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            bgcolor: "#242424",
          }}
        >
          <DrawerHeader
            sx={{
              bgcolor: "#242424",
              color: "#fff",
            }}
          >
            <h3>JJ Analytics </h3>
            <IconButton
              sx={{
                color: "#fff",
              }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              bgcolor: "#242424",
            }}
          >
            <ListItem
              disablePadding
              sx={{ display: "block", bgcolor: "#242424" }}
            >
              <ListItemButton
                onClick={() => naviagte("/")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{
                    color: "blue",
                    fontFamily: "sans-serif",
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => naviagte("/country")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PublicIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Country"
                  sx={{ color: "blue", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => naviagte("/endyear")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CalendarMonthIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Year vs. Intensity"
                  sx={{ color: "blue", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => naviagte("/pestle")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CategoryIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Pestle"
                  sx={{ color: "blue", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => naviagte("/region")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FlagIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Region"
                  sx={{ color: "blue", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => naviagte("/sector")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FactoryIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Sector vs. Intensity"
                  sx={{ color: "blue", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => naviagte("/source")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SourceIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Source"
                  sx={{ color: "blue", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => naviagte("/topics")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <TopicIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Topics"
                  sx={{ color: "blue", opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>

         
        </Drawer>
      
      </Box>
    </sideNavBar>
  );
}
