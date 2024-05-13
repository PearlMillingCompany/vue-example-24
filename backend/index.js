import express from "express"
const app = express();
import * as db from "./db.js"
const PORT = 3000;

app.use((req, res, next) => {
  // Allow access from multiple origins
  const allowedOrigins = [
      "http://localhost:5173",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
  }
  // Allow specific requests
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Pass to next layer of middleware
  next();
});

app.use(express.json());

//get individuals players
app.get("/players/:player_name", db.getPlayerById);

//get individual teams
app.get("/team/:id", db.getTeamById);

//get individual country
app.get("/country/:id", db.getCountryById);


app.get("/search", db.getPlayerByName);


//#region Server
//-----------------------------
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
//#endregion Server


