import React from "react";
// import styles from "../styling/Dashboard.module.css";
import ai1 from "../images/ai1.jpg";
import Elite from "../images/Elite.png";
import { Typography, styled } from "@mui/material";
import logo2 from "../images/logo2.jpg";
import { Container, fontFamily } from "@mui/system";
//import CyberMonday from "../images/CyberMonday.jpg";
import CyberMonday from "../images/Adpic1.jpg";

const StyledImg = styled("img")({
  width: "1200px",
  height: "700px",
});

const StyledImgContainer = styled(Container)({
  display: "flex",
  position: "relative",
  top: "160px",
  left: "-40px",
  width: "1200px",

  // backgroundColor: "#78FFD6",
  // alignItems: "center",
  justifyContent: "space-around",
});

const BlackFriday: React.FC = () => {
  return (
    <div>
      <StyledImgContainer>
        <Container>
          <Container style={{ display: "flex" }}>
            <StyledImg src={CyberMonday} />
          </Container>
          <Container
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "200px",
              marginLeft: "25px",
              width: "1200px",
              // backgroundColor: "#78FFD6",
              color: "#023C40",
              fontStyle: "bold",
            }}
          >
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              Elite Tech for gaming and software{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              Elite Tech for your new PC/Laptops{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              GET 20% OFF ON SELECT GAMES{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              GET 15% OFF ON SELECT lAPTOPS/PC{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              CODE: IfeelLucky12{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              CODE: IfeelElite12{" "}
            </Typography>
          </Container>
        </Container>
      </StyledImgContainer>
    </div>
  );
};

export default BlackFriday;
