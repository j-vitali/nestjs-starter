// database.config.ts
import { ConfigFactory } from '@nestjs/config';

export const grpcConfig: ConfigFactory = () => ({
  uri: process.env.GRPC_SERVER_URL,
});
