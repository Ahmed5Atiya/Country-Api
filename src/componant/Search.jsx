import { useData } from "../hooks/ProvideContext";
import useGetCountry from "../hooks/useGetCountry";

function Search() {
  const { searchTerm, setSearchTerm, setSelectedRegion, selectedRegion } =
    useData();
  const { isLoading2, countries } = useGetCountry();
  if (isLoading2) return <h1>Loading...</h1>;
  const uniqueRegions = [
    ...new Set(countries?.map((country) => country.region)),
  ];
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="select"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="all">All Regions</option>
        {uniqueRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Search;
