import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toast";

const defaultTheme = createTheme();

const PageWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
      <ToastContainer />
    </ThemeProvider>
  );
};

export default PageWrapper;
