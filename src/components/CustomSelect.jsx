import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      borderRadius: "var(--radii)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected
        ? "var(--colors-bg)"
        : "var(--colors-ui-base)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--colors-text)",
      paddingLeft: "0.25rem",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      boxShadow: "var(--shadow)",
      borderRadius: "var(--radii)",
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
      "@media(min-width: 767px)": {
        width: "200px",
      },
    }),
  },
})``;
