import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  name: "main-theme",
  color: {
    primary: "#00848c",
    primaryDark: "#037272",
    secondary: "#fccf17",
    secondaryDark: "#fec20f",
    header: "#1c1f4c",
    background: "#f9f9f9",
    foreground: "#eee",
    textlight: "#f9f9f9",
    textdark: "#25182e",
    error: "#ed4337",
    ok: "#3aab58",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
