import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>JSON Data Display</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}