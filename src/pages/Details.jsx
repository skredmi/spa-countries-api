import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useState, useEffect } from "react";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { CardDetail } from "../components/CardDetail";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  console.log(country);
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </Button>
      {country && <CardDetail {...country} navigate={navigate} />}
    </div>
  );
};
