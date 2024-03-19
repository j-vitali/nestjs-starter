import { registerAs } from "@nestjs/config";

export default registerAs("locale", () => ({
  locale: process.env.LOCALE || "en_US",
  dateFormat: process.env.DATE_FORMAT || "YYYY-MM-DD HH:mm:ss",
}));
