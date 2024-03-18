export default () => ({
  uri: process.env.MONGO_URI,
  type: process.env.DB_CONNECTION,
});
