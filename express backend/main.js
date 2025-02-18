require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const redis = require("redis");

const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env)
// PostgreSQL Connection
// const pool = new Pool({
//   user: process.env.PG_USER || "postgres",
//   host: process.env.PG_HOST || "localhost",
//   database: process.env.PG_DATABASE || "testdb",
//   password: process.env.PG_PASSWORD || "password",
//   port: process.env.PG_PORT || 5432,
// });

// pool.connect()
//   .then(() => console.log("✅ Connected to PostgreSQL"))
//   .catch(err => console.error("❌ PostgreSQL Error:", err));

// // Redis Connection
// const redisClient = redis.createClient({
//   socket: {
//     host: process.env.REDIS_HOST || "localhost",
//     port: process.env.REDIS_PORT || 6379,
//   },
// });

// redisClient.connect()
//   .then(() => console.log("✅ Connected to Redis"))
//   .catch(err => console.error("❌ Redis Error:", err));

app.use(express.json());

// PostgreSQL API Route
// app.get("/users", async (req, res) => {
//   try {
//     const { rows } = await pool.query("SELECT * FROM users;");
//     res.json(rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


/**
 * // Redis Set & Get API
app.get("/cache/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const value = await redisClient.get(key);
    if (value) {
      res.json({ key, value, from: "Redis Cache" });
    } else {
      res.status(404).json({ message: "Key not found in Redis" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/cache", async (req, res) => {
  try {
    const { key, value } = req.body;
    await redisClient.set(key, value);
    res.json({ message: `Key '${key}' set in Redis` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

 */