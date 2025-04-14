export default function handler(req, res) {
  const data = [
    { id: 1, name: "Item One", value: "Value 1" },
    { id: 2, name: "Item Two", value: "Value 2" },
  ];
  res.status(200).json(data);
}
