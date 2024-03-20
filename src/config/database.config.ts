import { registerAs } from "@nestjs/config";

export default registerAs('mongodb', () => ({
  uri: process.env.MONGO_URI,
  type: process.env.DB_CONNECTION,
}));
