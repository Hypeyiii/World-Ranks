import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filtersContext";

export default function useAPI() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { filters, setFilters } = useContext(FiltersContext);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        let filteredCountries = data;

        if (filters.order === "Population") {
          filteredCountries = filteredCountries.sort(
            (a, b) => b.population - a.population
          );
        }

        if (filters.order === "Area") {
          filteredCountries = filteredCountries.sort((a, b) => b.area - a.area);
        }

        if (filters.order === "A-Z") {
          filteredCountries = filteredCountries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          );
        }

        if (filters.memberOfUN) {
          filteredCountries = filteredCountries.filter(
            (country) => country.unMember
          );
        }

        if (filters.independent) {
          filteredCountries = filteredCountries.filter(
            (country) => country.independent
          );
        }

        if (filters.region !== "all") {
          filteredCountries = filteredCountries.filter(
            (country) => country.region === filters.region
          );
        }
        console.log(filters);

        if (filters.name) {
          const nameFilter = filters.name.toLowerCase();
          filteredCountries = filteredCountries.filter(
            (country) =>
              country.name.common.toLowerCase().includes(nameFilter) ||
              country.region.toLowerCase().includes(nameFilter) ||
              (country.subregion &&
                country.subregion.toLowerCase().includes(nameFilter))
          );
        }

        setCountries(filteredCountries);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, [filters]);

  return { countries, loading, error, filters, setFilters };
}
