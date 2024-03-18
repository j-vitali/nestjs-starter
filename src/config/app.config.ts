import { Inject } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { registerAs } from '@nestjs/config';

export const baseConfig = registerAs('base', () => ({
  appName: process.env.APP_NAME || 'nestjs-template',
  appPort: process.env.APP_PORT || 3000
}));

export const BaseConfig = () => Inject(baseConfig.KEY);

export type IBaseConfig = ConfigType<typeof baseConfig>;