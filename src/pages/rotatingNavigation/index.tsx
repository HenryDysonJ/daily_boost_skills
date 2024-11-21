import React, { useState } from 'react'
import { navigateStyle } from './style'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import TharRed from '../../assets/tharRed.png'
import TharRed2 from '../../assets/tharRed2.png'
import { CloseIcon } from '../../assets/closeIcon'
import MenuIcon from '../../assets/menuIcon'

const RotatingNavigation = () => {
    const [rotateNav, setRotateNav] = useState(false)
    return (
        <Box sx={{ ...navigateStyle.root, transform: rotateNav ? "rotate(-20deg)" : "" }}>
            <Stack>
                <Typography mb={2} sx={navigateStyle.title}>Mahindra Thar: Every Aspect Analysed</Typography>
                <Typography mb={3} sx={navigateStyle.subTitle}>Mahindra’s reborn iconic 4x4 takes a quantum leap forward, and we trace its journey so far.</Typography>
                <Typography mb={1} sx={navigateStyle.placeholder}>Published On Sep 24, 2020 12:14:00 PM</Typography>
            </Stack>
            <Stack>
                <img src={TharRed} style={{ height: 400 }} />
            </Stack>
            <Stack>
                <Typography mt={1}>As part of our 21st Anniversary, we have created a special supplement celebrating the new Mahindra Thar. The celebration would, of course, be incomplete without ample references to its past, what it means to its fan club, the widespread opportunities for adventure it creates and, finally, just what goes into making it an icon. To read the full version, get your hands on the September 2020 issue of Autocar India. Meanwhile, here are a few key excerpts:</Typography>
                <Typography mt={2} sx={{ ...navigateStyle.title, color: "#F53D3D" }}>Mahindra Thar: The History</Typography>
                <Typography mt={1}>As part of our 21st Anniversary, we have created a special supplement celebrating the new Mahindra Thar. The celebration would, of course, be incomplete without ample references to its past, what it means to its fan club, the widespread opportunities for adventure it creates and, finally, just what goes into making it an icon. To read the full version, get your hands on the September 2020 issue of Autocar India. Meanwhile, here are a few key excerpts:</Typography>
                <Typography mt={2} mb={2} sx={{ ...navigateStyle.title, color: "#F53D3D" }}>Mahindra Thar: Design Philosophy</Typography>
                <img src={TharRed2} style={{ height: 400 }} />
            </Stack>
            <Box sx={{ ...navigateStyle.circleContainer, transform: rotateNav ? "rotate(-90deg)" : "" }}>
                <IconButton sx={navigateStyle.closeIcon} onClick={() => setRotateNav(false)}><CloseIcon /></IconButton>
                <IconButton sx={navigateStyle.openIcon} onClick={() => setRotateNav(true)}><MenuIcon /></IconButton>
            </Box>
        </Box>
    )
}

export default RotatingNavigation