import { Box, Button, Stack } from "@mui/material";
import { orderProgressStyle } from "./style";
import { useState } from "react";

const OrderProgress = () => {
  const [count, setcount] = useState(1);
  const [selectOrder, setSelectOrder] = useState<number[]>([count]);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleClickProcess = () => {
    if (count < 9) {
      setcount(count + 1);
      setSelectOrder((prev) => [...prev, count + 1]);
    }
  };

  const handleClickLessProcess = () => {
    if (count > 1) {
      setcount(count - 1);
      const remove = selectOrder?.filter((num) => num !== count)
      setSelectOrder([...remove]);
    }
  };
  
  const findOrder = (num: number) => {
    return selectOrder?.find((order) => order === num);
  };

  return (
    <Stack sx={orderProgressStyle.rootStyle}>
      <Stack sx={orderProgressStyle.numberContiner}>
        {nums &&
          nums.map((num: number, indx: number) => (
            <Box
              key={num + indx}
              sx={{
                ...orderProgressStyle.numCountStyle,
                borderColor: findOrder(num) === num ? "blue" : "#ffff",
              }}
            >
              {num}
            </Box>
          ))}
        <Box
          sx={{
            ...orderProgressStyle.progressLineStyle,
            backgroundColor: 'blue',
            width: `${count === 1 ? 4 : (count - 1) * 12}%`
          }}
        ></Box>
      </Stack>
      <Stack sx={orderProgressStyle.btnContainer}>
        <Button
          sx={orderProgressStyle.prevBtnStyle}
          variant="outlined"
          onClick={() => handleClickLessProcess()}
        >
          Prev
        </Button>
        <Button
          sx={orderProgressStyle.nextBtnStyle}
          variant="contained"
          onClick={() => handleClickProcess()}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default OrderProgress;
