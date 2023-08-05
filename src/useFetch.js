import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abrotCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abrotCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("faild to fetch data from given server");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsLoading(false);
            setData(null);
          }
        });
    }, 1000);

    return () => abrotCont.signal;
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
