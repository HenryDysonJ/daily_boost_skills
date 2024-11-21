/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { appStyle } from "./style";
import ExpandCard from "./pages/expandCards";
import OrderProgress from "./pages/orederProgress";
import RotatingNavigation from "./pages/rotatingNavigation";
import BluryLoading from "./pages/bluryLoading";
import AnimationScroll from "./pages/scrollAnimation";


interface Task {
  name: string;
  component: React.ReactNode;
}

function App() {
  const [param, setParam] = useState<string | null>(null);
  const [component, setComponent] = useState<Task>({
    name: "",
    component: <></>,
  });

  const task = [
    { name: "ExpandCard", component: <ExpandCard /> },
    { name: "Order Progress", component: <OrderProgress /> },
    { name: "Rotating Navigation", component: <RotatingNavigation /> },
    { name: "Blury Loadingimg", component: <BluryLoading /> },
    { name: "Animation Scroll", component: <AnimationScroll /> },
  ];

  const handleClick = (name: string) => {
    const url = new URLSearchParams(window.location.search);
    url.set("task", name);
    window.location.search = url as unknown as string;
  };

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const myUrl = url.get("task");
    setParam(myUrl);
    const currentComponent = task.find(({ name }) => name === myUrl);
    setComponent(currentComponent || task[0]);
  }, [window.location.search]);
  return (
    <>
      <Stack sx={{ minWidth: "100%", minHeight: "100%" }}>
        {param ? (
          component.component
        ) : (
          <Box sx={{ ...appStyle.container }}>
            {task &&
              task.map((val: Task) => (
                <>
                  <Box sx={{ ...appStyle.card }} onClick={() => handleClick(val.name)}>
                    <Typography sx={{ ...appStyle.name }}>{val.name}</Typography>
                  </Box>
                </>
              ))}
          </Box>
        )}
      </Stack>
    </>
  );
}

export default App;
