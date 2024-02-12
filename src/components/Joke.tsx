import { useJoke } from "../hooks/hooks";


const Joke = () => {
  const {data, isLoading} = useJoke();

  if (isLoading) return <div>Loading</div>

  if (!data) return <div>Error</div>

  return <div>
    {data.joke}
  </div>
}

export default Joke;