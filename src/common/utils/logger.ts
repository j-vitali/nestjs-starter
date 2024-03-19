import { Logger } from '@nestjs/common';

export function LogMethod() {
  return function (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any,
    key: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: unknown[]): Promise<unknown> {
      const methodName = key;

      const logger = new Logger(target.constructor.name);

      logger.log({
        method: methodName,
        message: `Calling ${methodName}`,
        payload: args,
      });

      const result = await originalMethod.apply(this, args);

      return result;
    };

    return descriptor;
  };
}
