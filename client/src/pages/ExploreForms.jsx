import { useEffect, useState } from "react";
import axios from "../axios.default";

const ExploreForms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get("/form").then((res) => {
      console.log(res.data);
      setForms(res.data);
    });
  }, []);

  return <div>ExploreForms</div>;
};

export default ExploreForms;
