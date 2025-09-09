const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const watches = [
  { id: 1, brand: "Rolex", model: "Submariner", price: "Php 950,000", description: "Classic diving watch." },
  { id: 2, brand: "Omega", model: "Seamaster", price: "Php 350,000", description: "Luxury sports watch." },
  { id: 3, brand: "Tag Heur", model: "Carrera", price: "Php 250,000", description: "Known for its innovation in chronographs." },
];

app.get("/watches", (req, res) => {
  res.json(watches);
});

// Single watch by ID
app.get("/watches/:id", (req, res) => {
  const watch = watches.find(w => w.id === parseInt(req.params.id));
  if (!watch) {
    return res.status(404).json({ message: "Watch not found" });
  }
  res.json(watch);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
