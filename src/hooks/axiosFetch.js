// hooks/useAxiosFetch.js

import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (url, config = {}, propForReload) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
    
      try {
        const response = await axios.get(url, config);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url, JSON.stringify(config), propForReload]); // Adding JSON.stringify(config) to ensure deep comparison of config object

  return { data, loading, error };
};

export default useAxiosFetch;
