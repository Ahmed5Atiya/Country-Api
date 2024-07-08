// export default Country;
import { Link } from "react-router-dom";
import useDeleteItem from "../hooks/useDeleteItem";
import useGetCountry from "../hooks/useGetCountry";
import { useData } from "../hooks/ProvideContext";

export default function Country() {
  const {
    countryIdToDelete,
    searchTerm,
    selectedRegion,
    setCountryIdToDelete,
  } = useData();
  const { mutate, isDeleting, isLoading } = useDeleteItem();
  const { isLoading2, countries, error } = useGetCountry();
  if (isLoading || isLoading2) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;
  const handleDelete = (id) => {
    setCountryIdToDelete(id);
    mutate(id);
  };
  const filteredCountries = countries?.filter((country) => {
    const searchTermMatch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const regionMatch =
      selectedRegion === "all" || country.region === selectedRegion;
    return searchTermMatch && regionMatch;
  });

  return (
    <>
      <section className="grid">
        {filteredCountries?.map((item) => {
          const { numericCode, name, population, region, capital, flags } =
            item;
          return (
            <article key={numericCode}>
              <div className="box">
                <img src={flags.png} alt={name} />
                <div className="info">
                  <h3 className="name">{name.common}</h3>
                  <h4>Population : {population}</h4>
                  <h4>Region : {region}</h4>
                  <h4>Capital : {capital}</h4>
                </div>
                <div className="btns">
                  <Link to={`/country/${name.common}`} className="more">
                    Show More
                  </Link>
                  <button
                    className="btn"
                    disabled={isDeleting || countryIdToDelete === item.id}
                    onClick={() => handleDelete(item.id)}
                  >
                    {isDeleting && countryIdToDelete === item.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
