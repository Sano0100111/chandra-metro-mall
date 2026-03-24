const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = "YOUR_API_KEY";

app.get("/movies", async (req, res) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=IN`
    );
    res.json(data.data);
  } catch (err) {
    res.status(500).json({ error: "API error" });
  }
});

app.listen(PORT, () => console.log("Server running"));
