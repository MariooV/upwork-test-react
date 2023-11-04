import { Button, Stack } from "@mui/material";

interface CounterProps {
  increment: Function;
  decrement: Function;
  reset: Function;
  disabled: boolean;
}

const CounterFunctionality = ({
  increment,
  decrement,
  reset,
  disabled,
}: CounterProps) => {
  return (
    <>
      <Stack direction={"row"} gap={2} my={4}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => decrement()}
          disabled={disabled}
        >
          Decrement
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => increment()}
        >
          Increment
        </Button>
      </Stack>
      <Button color="secondary" variant="outlined" onClick={() => reset()}>
        Reset
      </Button>
    </>
  );
};

export default CounterFunctionality;
