import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'Config',
      useValue: ['fang', 'xiao'],
    },
  ],
  exports: [
    {
      provide: 'Config',
      useValue: ['fang', 'xiao'],
    },
  ],
})
export class ConfigModule {}
