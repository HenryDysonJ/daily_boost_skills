import { SxProps } from "@mui/material";

interface OrderProgress {
  [key: string]: SxProps;
}
export const orderProgressStyle: OrderProgress = {
  rootStyle: {
    margin: "18px 24px 0px 24px",
    backgroundColor: "#B3B8BB",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "calc(100vh - 114px)",
    gap: "100px",
  },

  numberContiner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    position:'relative'
  },

  numCountStyle: {
    height: "50px",
    width: "50px",
    display: "flex",
    textAlign:"center",
    color:"#0C356A",
    fontWeight:"600",
    fontSize:"1.2rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    backgroundColor: "#F0F3F6",
    border:"4px solid",
    cursor:"pointer",
    zIndex:50
  },

  progressLineStyle:{
    height:"6px",
    backgroundColor:"#F0F3F6",
    position:"absolute",
    zIndex:1
  },

  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap:"wrap",
    gap:'100px'
  },

  prevBtnStyle:{
    padding:"10px 36px",
    borderRadius:"8px",
    textTransform:"none",
    fontSize:"1.1rem",
    color:'#0C356A',
    fontWeight:"600",
    backgroundColor:'#ffff',
    border:0,
    ':hover':{
        border:0,
        backgroundColor:'#ffff',
    }
  },

  nextBtnStyle:{
    padding:"10px 36px",
    borderRadius:"8px",
    textTransform:"none",
    fontSize:"1.1rem",
    backgroundColor:"#0C356A",
    fontWeight:"600",
    border:0,
    ':hover':{
        border:0,
        backgroundColor:"#0C356A",
    }
  }
};
