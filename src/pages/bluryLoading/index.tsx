import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { bluryLoadingStyle } from './style';
import { Cars } from '../../utils';

const BluryLoading = () => {
    const [load, setLoad] = useState(100)
    const [listImg, setListImg] = useState<number[]>([])

    useEffect(() => {
        load === 0 && setLoad(100)
        load === 100 && setListImg([...listImg, listImg?.length - 1])
        if (load > 0 && listImg?.length <= Cars?.length) {
            setTimeout(() => {
                setLoad(load - 1)
            }, 50)
        }
    }, [load])

    return (
        <Box sx={bluryLoadingStyle.root}>
            <Grid container gap={2} height={'100%'}>
                {
                    Cars?.map((cars, i) => (
                        <Grid item xs={2.2} position={'relative'}>
                            <Box
                                sx={{
                                    ...bluryLoadingStyle.imgCard,
                                    backgroundImage: `url(${cars.image})`,
                                    filter: listImg.length - 1 === i && !listImg.includes(i) ? `blur(${load / 10}px)` : listImg.includes(i) ? "blur(0px)" : "blur(40px)",
                                    m: 1,
                                }}
                            >
                                <Typography sx={bluryLoadingStyle.nameStyle}>{cars.name}</Typography>
                            </Box>
                            {load && listImg.length - 1 === i && <Typography sx={bluryLoadingStyle.percenntage}>{load}%</Typography>}
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default BluryLoading