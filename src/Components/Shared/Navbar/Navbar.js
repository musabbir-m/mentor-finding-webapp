import React, { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { CatchingPokemon } from "@mui/icons-material";
import { Menu, MenuItem, Stack } from "@mui/material";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // dropdown2

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  //

  // Logout

  const handleLogout= ()=> {
      logOut()
      .then(data=>{})
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{ backgroundColor: "white",color:'black', boxShadow: "none" }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color=""
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              color="black"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
             <Link to='/'>Findmentor</Link>
            </Typography> 
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* {navItems.map((item) => (
                <Button key={item} sx={{ color: "white" }}>
                  {item}
                </Button>
              ))} */}

              {/* Bellow is the dropdown */}
              <div className="inline">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  See Mentors
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}><Link to='/category/webdevelopment'>Web Development</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to='/category/uxdesign'>UX and Design</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to='/category/product&marketing'>Product and Marketing</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to='/category/programming'>Programming</Link></MenuItem>
                </Menu>
              </div>

              {/* Dropdown ends */}

             {/* Profile dropdown */}
             <div className="inline">
               <Button
        id="demo-positioned-button2"
        aria-controls={open2 ? 'demo-positioned-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
      >
        <AccountCircleIcon></AccountCircleIcon>
      </Button>
      <Menu
        id="demo-positioned-menu2"
        aria-labelledby="demo-positioned-button2"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose2}>Profile</MenuItem>
        <MenuItem onClick={handleClose2}>My account</MenuItem>
       
        {user?.email? (
                <>
                  <MenuItem>
                    <Link to="/dashboard">Dashboard</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    Logout
                  </MenuItem>
                  
                </>): (<>
                <Button>
                <Link to="/login">Login</Link>
              </Button>
                </>
              )}
      </Menu>
             <div>
     
    </div>

    {/* profile dropdown ends */}
             </div>
             
             
            </Box>
            <Typography> </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
    //
  );
}
