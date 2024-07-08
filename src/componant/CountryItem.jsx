import { useNavigate, useParams } from "react-router-dom";
import useGetCountry from "../hooks/useGetCountry";

function CountryItem() {
  const { countries, isLoading } = useGetCountry();
  const navigate = useNavigate();
  const { id } = useParams();
  if (isLoading) return <h1>loging......s</h1>;
  const country = countries.find((item) => item.name.common === id);
  console.log(country);
  const { name, region, borders, tld, population, subregion, capital, flags } =
    country;
  return (
    <div>
      <button
        className="btn back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </button>
      <div className="item">
        <div className="image">
          <img src={flags.png} />
        </div>
        <div className="ditals">
          <h3>{name.common}</h3>
          <div className="ull">
            <ul>
              <li>
                Native Name : <span>{name.nativeName[0]}</span>{" "}
              </li>
              <li>
                Population : <span>{population}</span>{" "}
              </li>
              <li>
                Region: <span>{region}</span>{" "}
              </li>
              <li>
                Sup Region : <span>{subregion}</span>{" "}
              </li>
              <li>
                Capital: <span>{capital}</span>{" "}
              </li>
            </ul>
            <ul>
              <li>
                Top Level Domain <span></span>
                {tld}
              </li>
              <li>
                couranccy <span></span>
              </li>
              <li>
                Top Level Domain <span></span>
              </li>
            </ul>
          </div>

          <ul>
            <li className="borders">
              <h4> Border :</h4>
              <div>
                {borders?.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
