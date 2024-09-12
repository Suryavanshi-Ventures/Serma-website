import { useState } from "react";
import axios from "axios";

const AxiosPost = (url, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (postData, config = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          ...config.headers,
        },
        ...config, // additional config such as params
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : "An error occurred");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default AxiosPost;
