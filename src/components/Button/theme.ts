import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "60px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundImage: "linear-gradient(#FE5B78, #E11348)",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    boxShadow: "none",
  }
};
