import React from "react";
import backImage from "../../assets/images/auth/bg-img.png";
import { styled, Grid, CssBaseline } from "@mui/material";

const Root = styled(Grid)(({ theme }) => ({
    height: "100vh",
    width: "100%",
    fontFamily: '"PT Sans", "sans-serif", "Poppins"',
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
    position: "relative",
    width: "50%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
    backgroundColor: '#2E84B5',
    backgroundImage: `url(${backImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '90%'
}));

const Container = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px 0",
    [theme.breakpoints.down("md")]: {
        padding: "20px",
    },
}));

const Body = styled(Grid)(({ theme }) => ({
    maxWidth: "432px",
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
}));

export default function AuthLayout(props) {
    return (
        <Root container component="main">
            <CssBaseline />
            <ImageContainer />
            <Grid
                item
                sm={12}
                md={6}
                elevation={0}
                sx={{ width: "100%", backgroundColor: "#ffffff" }}
            >
                <Container>
                    <Body>{props.children}</Body>
                </Container>
            </Grid>
        </Root>
    );
};