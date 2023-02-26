import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('MiddleWare...');
    // res.send 拦截执行，不能喝next（）一起使用
    // res.send('eeeeeeeeeeeee');
    next();
  }
}
