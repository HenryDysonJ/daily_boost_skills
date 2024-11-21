import { Box, styled, type SxProps } from "@mui/material";

interface ExpandCard {
  [key: string]: SxProps;
}

export const expandCard: ExpandCard = {
  rootStyle: {
    display: "flex",
    flexDirection: "row",
  },
  cardContainer: {},
  nameStyle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "20px",
    position: "absolute",
    bottom: "10%",
    left: "10%",
  },
};

export const CardContainer = styled(Box)(() => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPositionY: "center",
  backgroundAttachment: "local",
  objectFit: "cover",
  borderRadius: "50px",
  height: "90vh",
  cursor: "pointer",
  margin: "10px",
  position: "relative",
}));
