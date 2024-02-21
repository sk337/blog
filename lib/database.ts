import postgres from "postgres";

const sql = postgres(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    max: 3,
    idle_timeout: 30,
  }
);

export default sql;
