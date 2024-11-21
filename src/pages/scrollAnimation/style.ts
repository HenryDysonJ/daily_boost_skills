import type { SxProps } from '@mui/material';

interface AnimationStyle {
    [key: string]: SxProps;
}

export const animationStyle: AnimationStyle = {
    root: {
        height: "calc(100vh-100px)",
        backgroundColor: "#F0F3F6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        overflow:"scroll"
    },

    cardStyle: {
        height: 170, 
        width: 500,
        borderRadius: '8px',
        boxShadow: "4px 8px 10px rgba(0,0,0,0.3)",
        'img': {
            height: 170, width: '100%',
            borderRadius: '8px',
            objectFit: 'cover',
        }
    },

    title: {
        color: "#02111A",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "20px",
        margin:0,
        textAlign:"left"
    },

    subTitle: {
        color: "#02111A",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "20px"
    },
}