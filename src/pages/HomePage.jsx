import { useEffect } from "react";
import axios from "axios";

import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { ALL_COUNTRIES } from "../config";

export const HomePage = ({ countries, setCountries }) => {
  console.log(countries);
  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <div>
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            alt: c.flags.alt,
            name: c.name.common,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital[0],
              },
            ],
          };
          return <Card key={c.name.common} {...countryInfo} />;
        })}
      </List>
    </div>
  );
};
