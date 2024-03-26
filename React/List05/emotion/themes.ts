import { Theme } from "@emotion/react"

export interface CustomTheme extends Theme {
  backgroundColor: string;
  color: string;
  linkColor: string;
  modeColor: string;
  modeBackgroundColor: string;
  modeHoverBackgroundColor: string;
  navbarBackgroundColor: string;
}

export const lightTheme: CustomTheme = {
  backgroundColor: '#fff',
  color: '#333',
  linkColor: "gray",
  modeColor: "gray",
  modeBackgroundColor: "white",
  modeHoverBackgroundColor: "#444",
  navbarBackgroundColor: "#f0f0f0"
}

export const darkTheme: CustomTheme = {
  backgroundColor: '#111',
  color: '#fff',
  linkColor: "white",
  modeColor: "white",
  modeBackgroundColor: "gray",
  modeHoverBackgroundColor: "#ccc",
  navbarBackgroundColor: "#222"
}

/*
$white: #fff;
$white-darker: #eee;
$tainted-white: #f5f5f5;
$tained-harder-white: #f0f0f0;
$dark-white: #ddd;
$darker-white: #ccc;
$black: #111;
$black-tainted: #222;
$gray: #333;
$light-gray: #444;
$very-light-gray: #666;
$green: #45a049;
$light-green: #4caf50;
*/