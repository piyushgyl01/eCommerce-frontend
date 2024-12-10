// useFetch.js
import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null); // Clear any previous errors
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Handle both array and error responses
      if (result.error) {
        setData([]);  // Empty array for no items
        setError(result.error);
      } else {
        setData(Array.isArray(result) ? result : []);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = async (updatedData) => {
    if (updatedData) {
      setData(updatedData);
    } else {
      await fetchData();
    }
  };

  return { data, error, loading, refetch };
};

export default useFetch;