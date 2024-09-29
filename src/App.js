import React from "react";
import "./App.css";
import Lottie from "lottie-react";
import animationData from "./phone.json";
import animationData1 from "./Name.json";
import animationData2 from "./bg.json";
import animationData3 from "./circle.json";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ResponsiveAppBar from "./appBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...(theme.applyStyles &&
    theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    })),
}));

function ReversingAnimation() {
  const options = {
    animationData: animationData3,
    loop: true,
    autoplay: true,
  };

  return (
    <Lottie {...options} style={{ width: 300, marginTop: 0, paddingTop: 0 }} />
  );
}

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="App">
        {/* Background Animation */}
        <Lottie
          animationData={animationData2}
          className="background-animation"
        />

        {/* Foreground Animations */}
        <Box sx={{ flexGrow: 1, marginTop: 150, padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <Lottie
                  animationData={animationData3}
                  className="foreground-animation"
                  style={{ width: 300, marginTop: 0, paddingTop: 0 }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Lottie
                  animationData={animationData1}
                  className="foreground-animation"
                  style={{ width: 300, marginBottom: 0, paddingBottom: 30 }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Lottie
                  animationData={animationData}
                  className="foreground-animation"
                  style={{ width: 300, marginTop: 0, paddingTop: 0 }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h3>Reversing Animation</h3>
                <ReversingAnimation />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
