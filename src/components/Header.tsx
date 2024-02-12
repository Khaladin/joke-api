import { Link, Stack } from "@mui/material";
import { StyledButton } from "./Button";
import { useJoke } from "../hooks/hooks";

const Header = () => {
  const {refetch, isFetching} = useJoke();

  return <Stack direction="row" justifyContent="space-between" >
    <StyledButton
      color="success"
      onClick={() => refetch()}
      disabled={isFetching}
      style={{}}
    >
      Get A new Random Joke
    </StyledButton>
    <Link
      href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
      rel="noreferrer"
      target="_blank"
    >
      View API Docs
    </Link>
  </Stack>
}

export default Header;
