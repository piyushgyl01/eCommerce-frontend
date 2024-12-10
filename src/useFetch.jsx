// import { useState, useEffect } from "react";
// const useFetch = (url, initialData) => {
//   const [data, setData] = useState(initialData);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     setLoading(true);
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => setError(error.message))
//       .finally(() => setLoading(false));
//   }, [url]);
//   return { data, loading, error };
// };
// export default useFetch;
import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Refetch function that can either fetch fresh data or update with provided data
  const refetch = async (updatedData) => {
    if (updatedData) {
      // If data is provided, update the state directly
      setData(updatedData);
    } else {
      // Otherwise, fetch fresh data from the API
      await fetchData();
    }
  };

  return { data, error, loading, refetch };
};

export default useFetch;