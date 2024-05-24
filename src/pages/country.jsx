import { useParams } from "react-router";
import useAPI from "../hooks/useAPI";
import Header from "../components/header";
import { Link } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  const { countries } = useAPI();

  if (!countries) {
    return <div>Loading...</div>;
  }

  const country = countries.find((country) => country.name.common === name);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <Header />
      <section className="w-[90%] md:w-[55%] h-auto mx-auto px-2 md:px-10 rounded-xl bg-[#1B1D1F] border border-[#282B30] relative bottom-7 md:bottom-14">
        <div className="flex flex-row gap-x-4 items-center absolute top-0 left-0 p-5">
          <Link to={`/`} className="text-[#D2D5DA] text-xs md:text-lg opacity-50">
            Home
          </Link>
          <span className="text-[#D2D5DA]">/</span>
          <span className="text-[#D2D5DA] text-xs md:text-lg">
            {name}
          </span>
        </div>
        <div className="relative w-[150px] md:w-[300px] md:h-[200px] mx-auto bottom-10 md:bottom-20">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center text-[#D2D5DA]">
          <p className="text-xl md:text-3xl font-bold">{name}</p>
          <p>{country.name.official}</p>
        </div>
        <div className="flex flex-row justify-center md:justify-between items-center w-[85%] mx-auto mt-5 md:mt-10 gap-4 md:gap-0">
          <div className="flex flex-row gap-2 py-2 px-2 md:py-2 md:px-6 bg-[#282B30] text-[#D2D5DA] rounded-xl">
            <p className="px-2 py-2 border-r-2 border-[#1B1D1F] h-full text-xs md:text-base">
              Population
            </p>
            <p className="p-2 text-[10px] md:text-base">
              {country.population.toLocaleString("en-US")}
            </p>
          </div>
          <div className="flex flex-row gap-2 py-2 px-2 md:py-2 md:px-6 bg-[#282B30] text-[#D2D5DA] rounded-xl">
            <p className="px-2 py-2 border-r-2 border-[#1B1D1F] h-full text-xs md:text-base flex flex-row gap-1 items-center">
              Area <span className="hidden md:block">(Km2)</span>
            </p>
            <p className="p-2 text-[10px] md:text-base">
              {country.area.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <section className="flex flex-col w-full mt-10">
          <div className="flex flex-row justify-between items-center py-4 border-t border-[#282B30]">
            <p className="text-[#6C727F] text-xs md:text-lg">Capital</p>
            <p className="text-[#D2D5DA] text-xs md:text-lg">
              {country.capital ? country.capital : "Not found"}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center py-4 border-t border-[#282B30]">
            <p className="text-[#6C727F] text-xs md:text-lg">Subregion</p>
            <p className="text-[#D2D5DA] text-xs md:text-lg">
              {country.subregion ? country.subregion : "Not found"}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center py-4 border-t border-[#282B30]">
            <p className="text-[#6C727F] text-xs md:text-lg">Language</p>
            <div className="flex flex-row">
              {country.languages ? (
                Object.values(country.languages).map((language, index) => (
                  <p key={index} className="text-[#D2D5DA] text-xs md:text-lg">
                    {language}
                    {index < Object.values(country.languages).length - 1 &&
                      ", "}
                  </p>
                ))
              ) : (
                <p className="text-[#D2D5DA] text-xs md:text-lg">Not found</p>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-4 border-t border-[#282B30]">
            <p className="text-[#6C727F] text-xs md:text-lg">Currencies</p>
            <div className="flex flex-row">
              {country.currencies ? (
                Object.values(country.currencies).map((currency, index) => (
                  <p key={index} className="text-[#D2D5DA] text-xs md:text-lg">
                    {currency.name}
                    {index < Object.values(country.currencies).length - 1 &&
                      ", "}
                  </p>
                ))
              ) : (
                <p className="text-[#D2D5DA] text-xs md:text-lg">Not found</p>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-4 border-t border-[#282B30]">
            <p className="text-[#6C727F] text-xs md:text-lg">Continent</p>
            <p className="text-[#D2D5DA] text-xs md:text-lg">
              {country.continents}
            </p>
          </div>
        </section>
        <div>
          <p className="text-[#6C727F] text-xs md:text-lg mt-10">
            Neighbouring Countries
          </p>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4 mt-4">
            {country.borders ? (
              country.borders.slice(0, 7).map((border, index) => {
                const borderCountry = countries.find(
                  (item) => item.cca3 === border
                );
                return borderCountry ? (
                  <div
                    key={index}
                    className="text-center hover:scale-105 transition-all"
                  >
                    <a href={`/country/${borderCountry.name.common}`}>
                      <img
                        src={borderCountry.flags.svg}
                        alt={borderCountry.name.common}
                        className="w-full h-[50px] object-cover rounded-md"
                      />
                    </a>
                    <p className="text-[#D2D5DA] text-xs md:text-lg text-nowrap text-center">
                      {borderCountry.name.common}
                    </p>
                  </div>
                ) : null;
              })
            ) : (
              <p className="text-base md:text-xl h-32 col-span-7 m-auto mt-10 text-[#D2D5DA]">
                {country.name.common} doesn´t have any Neighbouring countries
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Country;
