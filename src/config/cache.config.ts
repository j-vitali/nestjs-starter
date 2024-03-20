import { registerAs } from "@nestjs/config";

export default registerAs('cache', () => ({
  redis: process.env.REDIS
}));
