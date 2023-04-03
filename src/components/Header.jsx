import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </>
  );
};
