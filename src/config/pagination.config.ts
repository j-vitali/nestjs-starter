import { registerAs } from '@nestjs/config';

export default registerAs('pagination', () => ({
    defaultLimit: 10,
    maxLimit: 100,
    defaultSkip: 0,
}));
