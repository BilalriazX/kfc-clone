import React from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const pages = [
  "Everyday menus",
  "alacarte and combos",
  "signature boxes",
  "sharing",
  "promotions",
  "snacks",
  "midnight deals",
];

const Everyday = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid
          container
          item
          xs={12}
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
                </div>
              </Item>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  <button>Delivery</button>
                </div>
              </Item>
            </Grid>

            <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  <button>select location</button>
                </div>
              </Item>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "space-between" }}
          ></Grid>
        </Grid>
        <Grid style={{ marginBottom: "1rem" }}>
          <Item>
            <div> EVERYDAY VALUES</div>
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
            <img src={grid1} alt="grid1" width={300} />
            <h5>CRISPY BOX</h5>
            <div
              style={{
                border: "2px solid white",
                height: "45px",
                width: "85%",
                background: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>PKR 600</p>
              <div
                style={{
                  border: "2px solid red",
                  height: "44px",
                  width: "55%",
                  background: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p>Add to bucket</p>
              </div>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12}>
            <img src={grid2} alt="grid2" width={300} />
            <h5>BONELESS BOX</h5>
            <div
              style={{
                border: "3px solid white",
                height: "45px",
                width: "85%",
                background: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>PKR 600</p>
              <div
                style={{
                  border: "3px solid white",
                  height: "42px",
                  width: "55%",
                  background: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p>Add to bucket</p>
              </div>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12}>
            <img src={grid3} alt="grid3" width={300} />
            <h5>WOW BOX</h5>
            <Grid
              item
              style={{
                border: "3px solid white",
                height: "45px",
                width: "85%",
                background: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>PKR 600</p>
              <div
                style={{
                  border: "3px solid red",
                  height: "42px",
                  width: "55%",
                  background: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p>Add to bucket</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "4rem" }}>
          <Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "auto",
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
          style={{ display: "flex", justifyContent: "center" }}
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
                  padding: "10px",
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
                  padding: "10px",
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
                }}
              >
                <div>
                  <img src={appstore} alt="" width={70} height={50} />
                </div>
                <div>
                  <img src={down2} alt="" width={70} height={50} />
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Everyday;
