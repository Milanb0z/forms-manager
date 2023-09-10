import React from "react";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "../axios.default";

const defaultTheme = createTheme();

const newForm = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Create Form
          </Typography>
        </Toolbar>
      </AppBar>
      <main>{/* Hero unit */}</main>
    </ThemeProvider>
  );
};

export default newForm;
