// global-query.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class GlobalQueryMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Modify req.query as needed based on your global criteria
    // For example, you can add pagination, sorting, or filtering parameters here
    // You can access and modify req.query object to add your custom parameters
    // For example:
    // req.query.filter = { /* Your filter criteria */ };
    // req.query.sort = { /* Your sorting criteria */ };
    // req.query.pagination = { /* Your pagination criteria */ };
    next();
  }
}
