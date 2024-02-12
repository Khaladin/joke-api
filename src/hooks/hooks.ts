import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api";

const baseURL = "https://mwks-joke-service.azurewebsites.net/api/joke/random"

type Joke = {
  id: number,
  joke: string,
  punchLine: string,
}

const fetchJoke= () => {
  return axiosClient.get<Joke>(baseURL).then((res) => res.data);
}

export const useJoke = () => {
  return useQuery({
    queryKey: ['joke'],
    queryFn: fetchJoke
  })
}