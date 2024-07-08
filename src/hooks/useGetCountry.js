import { useQuery } from "@tanstack/react-query";

function useGetCountry() {
  // Fetch countries using React Query with optional filtering
  const {
    isLoading,
    data: countries,
    error,
  } = useQuery({
    queryFn: () => {
      // Replace with your actual API call
      return fetch("https://restcountries.com/v3.1/all").then((response) =>
        response.json()
      );
    },
    queryKey: ["countries"],
  });
  return { isLoading, countries, error };
}

export default useGetCountry;
