import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  shape: {
    borderRadius: 10,
  },

  palette: {
    primary: {
      main: "#091B27",
    },
    secondary: {
      main: "#E5E5E5",
    },
    background: {
      default: "#F6F6F6",
    },
    success: {
      main: "#3FAEAF",
    },
    text: {
      primary: "#2C2B3C",
      secondary: "#808591",
    },
  },
  typography: {
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontFamily: ["Nunito"].join(","),
  },
});

export default theme;
