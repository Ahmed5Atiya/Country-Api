import { QueryClient, useMutation } from "@tanstack/react-query";
import { useData } from "./ProvideContext";
function useDeleteItem() {
  const { setCountryIdToDelete } = useData();
  const {
    mutate,
    isLoading: isDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: (id) => {
      // Replace with your actual API call for deletion
      return fetch(`https://restcountries.com/v3.1/name/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete country");
          }
          return response.json(); // Might not be necessary depending on API
        })
        .catch((error) => {
          throw error; // Re-throw for error handling
        });
    },
    onSuccess: () => {
      // Invalidate the countries query to refetch after deletion
      QueryClient.invalidateQueries("countries");
      setCountryIdToDelete(null); // Reset deletion state
    },
    onError: (error) => {
      console.error("Error deleting country:", error);
      // Handle deletion errors here, e.g., display error message to user
    },
  });

  return { mutate, isDeleting, deleteError };
}

export default useDeleteItem;
