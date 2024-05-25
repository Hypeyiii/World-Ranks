import useAPI from "../hooks/useAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import serch from "../assets/Search.svg";
import dropdown from "../assets/Expand_down.svg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import useFilters from "../hooks/useFilters";

const Main = () => {
  const { countries, loading, setFilters, filters } = useAPI();
  const navigate = useNavigate();
  const [showDropwdown, setShowDropdown] = useState(false);

  const {
    handleChangeMember,
    handleChangeIndependent,
    handleChangeText,
    handleChangeRegion,
    cleanFilters,
    text,
  } = useFilters();

  return (
    <>
      <Header />
      <section className="w-[95%] h-auto mx-auto p-4 px-10 rounded-xl bg-[#1B1D1F] border border-[#282B30] relative bottom-14">
        <div className="flex flex-row gap-x-10 md:gap-x-0 justify-between items-center text-[#6C727F]">
          <p className="font-bold text-xs md:text-base text-nowrap">
            Found {countries.length} countries
          </p>
          <div className="flex flex-row items-center gap-1 bg-[#282B30] border border-transparent rounded-md p-1 md:p-2">
            <img src={serch} alt="Search" className="size-4 md:size-6" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-[#6C727F] placeholder:text-[#6C727F] placeholder:w-fit focus:outline-none w-20 text-[10px] md:text-base md:w-96 text-left text-nowrap rounded-xl"
              value={text}
              onChange={handleChangeText}
            />
          </div>
        </div>
        <div className="grid grid-cols-10 w-full mx-auto mt-5 md:mt-10">
          <div className="flex flex-col justify-start items-start gap-2 col-span-10 md:col-span-2">
            <p className="text-xs md:text-sm text-[#6C727F] font-semibold">
              Sort by
            </p>
            <div
              onClick={() => setShowDropdown(!showDropwdown)}
              className="flex flex-row justify-between items-center px-2 py-1 md:py-2 md:px-4 border border-[#6C727F] rounded-xl w-full relative cursor-pointer"
            >
              <p className="text-[#D2D5DA] text-sm md:text-lg">
                {filters.order}
              </p>
              <div className="absolute right-0 top-0 bottom-0 my-auto p-2 md:p-3">
                <img src={dropdown} alt="Dropwdown logo" />
              </div>
              <div>
                {showDropwdown && (
                  <div className="absolute top-10 left-0 w-full bg-[#282B30] border border-[#6C727F] rounded-xl p-1 md:p-2">
                    <p
                      className="text-[#D2D5DA] hover:bg-[#6C727F] rounded-xl p-1 md:p-2 text-xs md:text-base cursor-pointer transition-all"
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          order: "Population",
                        }))
                      }
                    >
                      Population
                    </p>
                    <p
                      className="text-[#D2D5DA] hover:bg-[#6C727F] rounded-xl p-1 md:p-2 text-xs md:text-base cursor-pointer transition-all"
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          order: "Area",
                        }))
                      }
                    >
                      Area
                    </p>
                    <p
                      className="text-[#D2D5DA] hover:bg-[#6C727F] rounded-xl p-1 md:p-2 text-xs md:text-base cursor-pointer transition-all"
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          order: "A-Z",
                        }))
                      }
                    >
                      A-Z
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-5 md:mt-10 text-xs md:text-sm text-[#6C727F] font-semibold">
              Region
            </p>
            <div className="grid grid-cols-4 md:grid-cols-3 gap-1 md:gap-4 justify-start items-center text-center">
              <label
                className={`p-1 md:p-2 text-sm md:text-base text-[#D2D5DA] hover:bg-[#282B30] rounded-xl transition-all cursor-pointer ${
                  filters.region === "all" ? "bg-[#282B30]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="all"
                  name="region"
                  onChange={handleChangeRegion}
                />
                All
              </label>
              <label
                className={`p-1 md:p-2 text-sm md:text-base text-[#D2D5DA] hover:bg-[#282B30] rounded-xl transition-all cursor-pointer ${
                  filters.region === "Americas" ? "bg-[#282B30]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="Americas"
                  name="region"
                  onChange={handleChangeRegion}
                />
                America
              </label>
              <label
                className={`p-1 md:p-2 text-sm md:text-base text-[#D2D5DA] hover:bg-[#282B30] rounded-xl transition-all cursor-pointer ${
                  filters.region === "Europe" ? "bg-[#282B30]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="Europe"
                  name="region"
                  onChange={handleChangeRegion}
                />
                Europe
              </label>
              <label
                className={`p-1 md:p-2 text-sm md:text-base text-[#D2D5DA] hover:bg-[#282B30] rounded-xl transition-all cursor-pointer ${
                  filters.region === "Africa" ? "bg-[#282B30]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="Africa"
                  name="region"
                  onChange={handleChangeRegion}
                />
                Africa
              </label>
              <label
                className={`p-1 md:p-2 text-sm md:text-base text-[#D2D5DA] hover:bg-[#282B30] rounded-xl transition-all cursor-pointer ${
                  filters.region === "Antarctic" ? "bg-[#282B30]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="Antarctic"
                  name="region"
                  onChange={handleChangeRegion}
                />
                Antarctic
              </label>
              <label
                className={`p-1 md:p-2 text-sm md:text-base text-[#D2D5DA] hover:bg-[#282B30] rounded-xl transition-all cursor-pointer ${
                  filters.region === "Asia" ? "bg-[#282B30]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="Asia"
                  name="region"
                  onChange={handleChangeRegion}
                />
                Asia
              </label>
              <label
                className={`p-1 md:p-2 text-sm md:text-base text-[#D2D5DA] hover:bg-[#282B30] rounded-xl transition-all cursor-pointer ${
                  filters.region === "Oceania" ? "bg-[#282B30]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="Oceania"
                  name="region"
                  onChange={handleChangeRegion}
                />
                Oceania
              </label>
            </div>
            <p className="text-xs md:text-sm text-[#6C727F] font-semibold mt-5 md:mt-10">
              Status
            </p>
            <div className="flex flex-col gap-4 items-start justify-start">
              <label className="text-[#D2D5DA] flex flex-row gap-2 items-center text-xs md:text-base">
                <input
                  type="checkbox"
                  className="checkbox size-3 md:size-4"
                  onChange={handleChangeMember}
                  value={true}
                />
                Member of the United Nations
              </label>
              <label className="text-[#D2D5DA] flex flex-row gap-2 items-center text-xs md:text-base">
                <input
                  type="checkbox"
                  className="checkbox size-3 md:size-4"
                  onChange={handleChangeIndependent}
                  value={true}
                />
                Independent
              </label>
            </div>
          </div>
          <div className="col-span-10 md:col-span-8 px-0 md:px-10 mt-10 md:mt-0">
            {loading ? (
              <div className="flex justify-center items-center h-[50vh]">
                <AiOutlineLoading3Quarters className="animate-spin size-32 text-[#282B30]" />
              </div>
            ) : (
              <table className="w-full text-center md:text-left">
                <thead className="border-b border-[#282B30]">
                  <tr className="text-[#6C727F]">
                    <th className="pb-5 text-xs md:text-base">Flag</th>
                    <th className="pb-5 text-xs md:text-base pl-5">Name</th>
                    <th className="pb-5 text-xs md:text-base">Population</th>
                    <th className="pb-5 text-xs md:text-base text-nowrap flex flex-row gap-1 items-center">
                      Area <span className="hidden md:block">(Km2)</span>
                    </th>
                    <th className="pb-5 text-xs md:text-base">Region</th>
                  </tr>
                </thead>
                {countries.length > 0 ? (
                  <tbody>
                    {countries.map((country, index) => (
                      <tr
                        key={index}
                        className="text-[#D2D5DA] hover:bg-[#282B30] transition-all cursor-pointer border-b border-[#282B30]"
                        onClick={() =>
                          navigate(`/country/${country.name.common}`)
                        }
                      >
                        <td className="w-10 md:w-16 h-auto m-auto py-3 md:py-4">
                          <Link to={`country/${country.name.common}`}>
                            <img
                              src={country.flags.svg}
                              alt={country.name.common}
                              className="rounded-md w-full h-full object-cover"
                            />
                          </Link>
                        </td>
                        <td className="pl-5 text-pretty text-[10px] md:text-lg">
                          {country.name.common}
                        </td>
                        <td className="text-[9px] md:text-lg">
                          {country.population.toLocaleString("en-US")}
                        </td>
                        <td className="text-[9px] md:text-lg">
                          {country.area.toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className="text-[10px] md:text-lg">
                          {country.region}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td
                        colSpan="5"
                        className="text-[#D2D5DA] text-center py-52 text-xl md:text-3xl"
                      >
                        <div className="flex flex-col gap-2 justify-center items-center text-center">
                          No countries Found
                          <button
                            className="text-2xl border rounded-xl text-[#282B30] py-2 px-4 w-fit border-[#282B30] hover:text-[#D2D5DA] hover:border-[#D2D5DA] transition-all"
                            onClick={cleanFilters}
                          >
                            Clean filters
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Main;
