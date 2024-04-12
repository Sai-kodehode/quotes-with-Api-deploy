import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        import.meta.env.VITE_API_URL,
        {
          headers: {
            Authorization: `Token token=${import.meta.env.VITE_API_KEY}`,
          },
        },
        []
      );
      setData(result);
    };
    fetchData();
  });
  console.log(data?.data);
  return (
    <div>
      <h1>{data?.data.quotes[0].body}</h1>
      <p>{data?.data.quotes[0].author}</p>
    </div>
  );
}

export default App;
