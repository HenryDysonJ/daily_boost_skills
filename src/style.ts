import type { SxProps } from "@mui/material";

interface AppStyleProps {
  [key: string]: SxProps;
}

export const appStyle: AppStyleProps = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px",
    padding: "16px",
  },
  card: {
    backgroundColor: "#3C5D87",
    borderRadius: "12px",
    display: "flex",
    padding:'10px',
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center",
    minHeight: "90px",
    maxWidth: "170px",
    transition: "all .3s",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#08254A",
      boxShadow: "3px 6px 10px #F0EFFf",
      transform: "scale(1.1)",
    },
  },
  name:{
    fontSize:"20px",
    fontWeight:"700",
    lineHeight:"24px",
    color:"#ffff",
  }
};
