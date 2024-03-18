import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

@Injectable()
export class AppService {
  getHello(): string {
    const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    return `Hello World! ALADIA, now is ${now}`;
  }
}
