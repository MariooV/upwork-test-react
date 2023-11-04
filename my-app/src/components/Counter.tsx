import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CounterFunctionality from "./CounterFunctionality";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <Typography variant="h3">{counter}</Typography>
      <CounterFunctionality
        increment={() => setCounter((prevState) => ++prevState)}
        decrement={() => setCounter((prevState) => --prevState)}
        reset={() => setCounter(0)}
        disabled={counter === 0}
      />
    </>
  );
};

export default Counter;
