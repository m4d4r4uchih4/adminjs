import { useState } from "react";

export default function Admin() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const addItem = () => {
    const newItem = { id: Date.now(), name, value };
    setItems([...items, newItem]);
    setName("");
    setValue("");
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <h2>Preview</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}