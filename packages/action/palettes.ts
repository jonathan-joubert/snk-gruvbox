import { DrawOptions as DrawOptions } from "@snk/svg-creator";

export const basePalettes: Record<
  string,
  Pick<
    DrawOptions,
    "colorDotBorder" | "colorEmpty" | "colorSnake" | "colorDots" | "dark"
  >
> = {
  "github-light": {
    colorDotBorder: "#1b1f230a",
    colorDots: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    colorEmpty: "#ebedf0",
    colorSnake: "purple",
  },
  "github-dark": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",
    colorDots: ["#282828", "#504945", "#665c54", "#bdae93", "#fbf1c7"],
    //#282828,#504945,#665c54,#bdae93,#fbf1c7
    colorSnake: "#fabd2f",
  },
};

// aliases
export const palettes = { ...basePalettes };
palettes["github"] = palettes["github-light"];
palettes["default"] = palettes["github"];
