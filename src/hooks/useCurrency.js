import { useState, useEffect } from "react";
import axios from "axios";

function useCurrency(url) {
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setCurrency(response.data.rates))
      .catch((error) => console.error("something went wrong !", error.message));
  }, []);

  return [currency];
}

export default useCurrency;
