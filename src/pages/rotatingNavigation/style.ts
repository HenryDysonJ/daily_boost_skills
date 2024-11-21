import type { SxProps } from '@mui/material';

interface NavigateStyle {
    [key: string]: SxProps;
}

export const navigateStyle: NavigateStyle = {
    root: {
        height: "calc(100vh-20px)",
        backgroundColor: "#F0F3F6",
        padding: "20px 30px 0 400px",
        transition: "transform 1s linear",
        transformOrigin: "top left",
        transformStyle: "preserve-3D",
        position: "relative"
    },

    title: {
        color: "#02111A",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "20px"
    },

    subTitle: {
        color: "#02111A",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "20px"
    },

    placeholder: {
        color: "#6A7175",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px"
    },

    circleContainer: {
        backgroundColor: "#F76363",
        height: '160px',
        width: "160px",
        borderRadius: "50%",
        position: "absolute",
        top: "-80px",
        left: "-80px",
        transition: "transform 1s linear",
    },

    closeIcon: {
        position: "absolute",
        top: "80px",
        left: "30px"
    },

    openIcon: {
        position: "absolute",
        top: "90px",
        left: "90px"
    }
}