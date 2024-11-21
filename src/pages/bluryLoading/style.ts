import type { SxProps } from '@mui/material';

interface BluryLoading {
    [key: string]: SxProps;
}

export const bluryLoadingStyle: BluryLoading = {
    root: {
        height: "96vh",
        backgroundColor:"#F0F3F6",
        zIndex:-1
    },

    imgCard: {
        height: "97%",
        width: "100%",
        boxShadow: "2px 4px 6px rgba(0,0,0,0.3)",
        objectFit: "cover",
        backgroundRepeat: 'round',
        position: 'relative',
        borderRadius:"12px",
        zIndex: -1,
    },

    nameStyle: {
        color: "#fff",
        fontWeight: "700",
        fontSize: "20px",
        position: "absolute",
        bottom: "10%",
        left: "6%",
    },

    percenntage:{
        color: "#fff",
        fontWeight: "800",
        fontSize: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
    }
}