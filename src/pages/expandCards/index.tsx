import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Cars } from "../../utils";
import { CardContainer, expandCard } from "./style";

interface Cars {
  name: string;
  image: string;
}
const ExpandCard = () => {
  const [expandCars, setExpandCars] = useState("");

  const handleClick = (cars: Cars) => {
    setExpandCars(cars.name);
  };

  return (
    <Stack sx={{ ...expandCard.rootStyle }}>
      {Cars &&
        Cars.length > 0 &&
        Cars.map((cars: Cars, i: number) => (
          <CardContainer
            onClick={() => handleClick(cars)}
            key={i}
            sx={{
              backgroundImage: `url(${cars.image})`,
              flex: expandCars === cars.name ? 6.5 : 0.5,
              transition: expandCars === cars.name ? "right 1.9s linear" : "",
            }}
          >
            <Typography sx={{ ...expandCard.nameStyle }}>
              {cars.name}
            </Typography>
          </CardContainer>
        ))}
    </Stack>
  );
};

export default ExpandCard;
