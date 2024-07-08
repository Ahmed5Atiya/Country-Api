import { createContext, useContext, useState } from "react";
import useGetCountry from "./useGetCountry";
import useDeleteItem from "./useDeleteItem";

const stateContext = createContext();
function ProvideContext({ children }) {
  const [countryIdToDelete, setCountryIdToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  return (
    <stateContext.Provider
      value={{
        countryIdToDelete,
        searchTerm,
        selectedRegion,
        setCountryIdToDelete,
        setSelectedRegion,
        setSearchTerm,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}

function useData() {
  const context = useContext(stateContext);
  if (context === undefined)
    throw new Error("you use the context out the provider");
  return context;
}

export { ProvideContext, useData, stateContext };
