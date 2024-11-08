/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: "#fff",
    primary: "#CB1E1E",
    secondary: "#EA7171",
    accent: "#F1A7A7",
    text: "#F4F4F4",
    text_primary: "#282828",
    text_secondary: "#646464",
    text_white: "#fff",
    card: "#fff",
    border: "#e2e8f0",
    success_primary: "#1EA427",
    success_secondary: "#1F8126",
    error_primary: "#B02E2E",
    error_secondary: "#8A2F2F",
    warning_primary: "#F2BC08",
    warning_secondary: "#DEB11C",
    notification: "#000",
  },
};

export const NAV_THEME = {
  light: {
    background: "transparent", // background
    border: "transparent", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(240 5.9% 10%)", // primary
    text: "hsl(240 10% 3.9%)", // foreground
  },
  dark: {
    background: "transparent", // background
    border: "transparent", // border
    card: "hsl(240 10% 3.9%)", // card
    notification: "hsl(0 72% 51%)", // destructive
    primary: "hsl(0 0% 98%)", // primary
    text: "hsl(0 0% 98%)", // foreground
  },
};
