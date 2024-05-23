import useAPI from "./useAPI";

export default function useFilters() {
  const {filters, setFilters} = useAPI();

  const handleChangeMember = (e) => {
    if (e.target.checked) {
      setFilters({ ...filters, memberOfUN: event.target.value });
    } else {
      setFilters({ ...filters, memberOfUN: false });
    }
  };

  const handleChangeIndependent = (e) => {
    if (e.target.checked) {
      setFilters({ ...filters, independent: event.target.value });
    } else {
      setFilters({ ...filters, independent: false });
    }
  };

  return { handleChangeMember, handleChangeIndependent };
}
