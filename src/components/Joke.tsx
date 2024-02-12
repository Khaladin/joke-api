import { useLayoutEffect, useState } from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";

import { useJoke } from "../hooks/hooks";
import { StyledButton } from "./Button";

const Joke = () => {
  const [showPunchLine, setShowPunchLine] = useState<boolean>(false)


  const {data, isLoading, isFetching} = useJoke();

  useLayoutEffect(() => {
    setShowPunchLine(false)
  }, [data?.id])


  if (isLoading || isFetching) return <CircularProgress />

  if (!data) return <Typography color="error">THERE WAS AN ERROR LOADING YOUR JOKE.</Typography>

  return <Stack>
    <Typography textAlign={"start"}>{data.joke}</Typography>
    <StyledButton
      color="primary"
      onClick={() => setShowPunchLine(!showPunchLine)}
      disabled={false}
      style={{alignSelf: "center"}}
    >
      {!showPunchLine ? "Show Punchline" : "Hide Punchline"}
    </StyledButton>
    {showPunchLine &&
      <Typography textAlign={"end"}>{data.punchLine}</Typography>
    }
  </Stack>
}

export default Joke;