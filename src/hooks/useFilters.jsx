import useAPI from "./useAPI";
import { useState } from "react";

export default function useFilters() {
  const { setFilters } = useAPI();
  const [text, setText] = useState("");

  const handleChangeMember = (e) => {
    setFilters((prev) => ({
      ...prev,
      memberOfUN: e.target.checked,
    }));
  };

  const handleChangeIndependent = (e) => {
    setFilters((prev) => ({
      ...prev,
      independent: e.target.checked,
    }));
  };

  const handleChangeText = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);
    setFilters((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleChangeRegion = (e) => {
    setFilters((prev) => ({
      ...prev,
      region: e.target.value,
    }));
  };

  const cleanFilters = () => {
    setText("");
    setFilters((prev) => ({
      ...prev,
      region: "all",
      memberOfUN: false,
      independent: false,
      name: "",
    }));
  };

  return {
    handleChangeMember,
    handleChangeIndependent,
    handleChangeText,
    handleChangeRegion,
    cleanFilters,
    text,
  };
}
