import useFetch from "./useFetch";

export default function useCharacter(id) {
  const url = id ? `https://the-one-api.dev/v2/character/${id}` : "https://the-one-api.dev/v2/character";
  return useFetch(url);
}
