import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData);
        if (!response.ok) {
          throw new Error("Problem with fetching data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData(url);
  }, [url]);

  return { data, loading, error };
};

export { useFetch };
