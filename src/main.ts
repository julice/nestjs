import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

// 全局中间件，通过app.use()引用
// function MiddleWareAll(req: any, res: any, next: any) {
//   console.log(req, res, 'MiddleWareAll...');
//   next();
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  // app.use(MiddleWareAll);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
