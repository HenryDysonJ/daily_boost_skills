import { Box, Stack, Typography } from '@mui/material'
import { animationStyle } from './style'
import { Cars } from '../../utils'

const AnimationScroll = () => {

    const handleScoll = (e: any) => {
        console.log(e);
    }
    return (
        <Box sx={animationStyle.root} onScroll={handleScoll}>
            {
                Cars?.map((cars) => (
                    <Stack m={1} sx={{
                        // transform: "translateX(210%)",
                        // transition: "transform(0.5s ease)",
                        ':nth-of-type(even)': {
                            // transform: "translateX(-210%)",
                        }
                    }}>
                        <Typography sx={{ ...animationStyle.title, color: "#F53D3D" }}>{cars?.name}</Typography>
                        <Stack mt={1} sx={animationStyle.cardStyle}>
                            <img src={cars?.image} />
                        </Stack>
                    </Stack>
                ))
            }
        </Box>
    )
}

export default AnimationScroll