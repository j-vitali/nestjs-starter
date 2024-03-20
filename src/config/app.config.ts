import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
  appName: process.env.APP_NAME || "nestjs-template",
  appPort: process.env.APP_PORT || 3000,
}));
