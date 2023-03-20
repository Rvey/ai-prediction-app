import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

export const useMutate = (
  url,
  brand,
  selectedModel,
  selectedStorage,
  selectedCondition
) => {
  // send post request to the url
  const formData = new URLSearchParams();
  formData.append("brand", brand);
  formData.append("model", selectedModel);
  formData.append("storage", selectedStorage);
  formData.append("condition", selectedCondition);
  const [prediction , setData] = useState(0)

  const predict = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "apikey AUTH",
      },
      body: formData.toString(),
    })
    .then((res) => res.json())
    .then((data) => setData(data?.prediction));
  }
  return { prediction , predict }
};
