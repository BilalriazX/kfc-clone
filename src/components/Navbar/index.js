import React from "react";
import { useNavigate } from "react-router-dom";
import kfc1 from "./../../assets/images/KFC1.jpg";
import cart from "./../../assets/images/cart.jpg";
import food2 from "./../../assets/images/food2.jpg";
import food1 from "./../../assets/images/food1.jpg";
import food3 from "./../../assets/images/food3.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";
import Button from "react-bootstrap/Button";
import grid2 from "./../../assets/images/grid2.jpg";
import grid1 from "./../../assets/images/grid1.jpg";
import grid3 from "./../../assets/images/grid3.jpg";
import last from "./../../assets/images/last.jpg";
import appstore from "./../../assets/images/appstore.jpg";
import down2 from "./../../assets/images/down2.jpg";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import Everyday from "./Everyday";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const pages = [
  { name: "Everyday menus", url: "Everyday", id: "1" },
  { name: "alacarte and combos", url: "/combos", id: "2" },
  { name: "signature boxes", url: "/", id: "3" },
  { name: "sharing", url: "/", id: "4" },
  { name: "promotions", url: "/", id: "5" },
  { name: "snacks", url: "/", id: "6" },
  { name: "midnight deals", url: "/", id: "7" },
];

const settings = ["cartitems", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    console.log("url:", url);
    navigate(url);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container>
      <Grid
        container
        spacing={3}
        style={{
          display: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <Grid item xs={12} style={{ margin: "1rem", paddingLeft: "0px" }}>
          <Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "90px",

                backgroundColor: "white",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <div>
                <img src={kfc1} alt="" width={50} height={50} />
              </div>
              <h1>KFC</h1>
              <Link to="/signin">
                <button>Register/login</button>
              </Link>
            </div>
          </Item>
        </Grid>

        <AppBar
          style={{
            display: "center",
            backgroundColor: "silver",
            justifyContent: "center",
            padding: "10px",
          }}
          position="static"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Menu
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                MENU
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    onClick={() => handleCloseNavMenu(page.url)}
                    // sx={{ my: 2, color: "silver", display: "block" }}
                    // href={page.url}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="B" src="cart" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Grid item xs={12}>
          <Item>
            <div className="slide-container">
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div
                      className="banner-bg-image"
                      style={{ backgroundImage: `url(${slideImage.url})` }}
                    >
                      <span>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem", padding: "10px" }}>
          <Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "20vh",
              }}
            >
              <div>SIGNATURE BOXES</div>
            </div>
          </Item>
        </Grid>
        <Grid
          container
          lg={12}
          md={12}
          sm={12}
          xs={12}
          spacing={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <img src={grid1} alt="grid1" width={320} />
            <h5>CRISPY BOX</h5>
            <div
              style={{
                border: "2px solid black",
                height: "45px",
                width: "85%",
                background: "red",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>PKR 600</p>
              <div
                style={{
                  border: "2px solid white",
                  height: "40px",
                  width: "100px",
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button>Add to bucket</button>
              </div>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12}>
            <img src={grid2} alt="grid2" width={320} />
            <h5>BONELESS BOX</h5>
            <div
              style={{
                border: "2px solid black",
                height: "41px",
                width: "85%",
                background: "red",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>PKR 600</p>
              <div
                style={{
                  border: "2px solid white",
                  height: "37px",
                  width: "100px",
                  background: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button>Add to bucket</button>
              </div>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12}>
            <img src={grid3} alt="grid3" width={320} />
            <h5>WOW BOX</h5>
            <Grid
              item
              style={{
                border: "2px solid black",
                height: "45px",
                width: "85%",
                background: "red",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>PKR 600</p>
              <div
                style={{
                  border: "2px solid white",
                  height: "40px",
                  width: "100px",
                  background: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button>Add to bucket</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1rem", padding: "10px" }}>
          <Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <img src={last} alt="" width={120} height={120} />
              </div>
            </div>
          </Item>
        </Grid>
        <Grid
          container
          lg={12}
          md={12}
          sm={12}
          xs={12}
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Grid item lg={2.4} md={4} sm={6} xs={12}>
            <Item>
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <h3>Information</h3>
                <p>About Us</p>
                <p>Bhook Mitao</p>
                <p>Privacy Policy</p>
                <p>Careers</p>
              </div>
            </Item>
          </Grid>
          <Grid item lg={2.4} md={4} sm={6} xs={12}>
            <Item>
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <h3>Food</h3>
                <p>Our Secret Recipe</p>
                <p>our combos</p>
                <p>made for you</p>
                <p>single</p>
              </div>
            </Item>
          </Grid>

          <Grid item lg={2.4} md={4} sm={6} xs={12}>
            <Item>
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: "2.5px",
                  marginBottom: "1rem",
                }}
              >
                <h3>Locations</h3>
                <p>Find a Store </p>
                <p>near you</p>
                <p>takeaway</p>
                <p>deilveries</p>
              </div>
            </Item>
          </Grid>
          <Grid item lg={2.4} md={4} sm={6} xs={12}>
            <Item>
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: "3px",
                  marginBottom: "1rem",
                }}
              >
                <h3>Get in Touch</h3>
                <p>Contact</p>
                <p>Join Us</p>
                <p>Terms and Conditions</p>
                <p>complains</p>
              </div>
            </Item>
          </Grid>
          <Grid item lg={2.4} md={4} sm={6} xs={12}>
            <Item>
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  backgroundColor: "white",
                  alignItems: "center",
                  padding: "10px",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <img src={appstore} alt="" width={75} height={60} />
                </div>
                <div>
                  <img src={down2} alt="" width={75} height={60} />
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            height: "20vh",
          }}
        >
          <p>© 2022 KFC Pakistan. All rights reserved.</p>
          <p>eCommerce by Fishry</p>
        </div>
      </Grid>
    </Container>
  );
};

export default Navbar;

const slideImages = [
  {
    url: food1,
    caption: "Slide 1",
  },
  {
    url: food2,
    caption: "Slide 2",
  },
  {
    url: food3,
    caption: "Slide 3",
  },
];
