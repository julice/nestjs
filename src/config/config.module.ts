import { DynamicModule, Global, Module } from '@nestjs/common';

@Global()
@Module({})
export class ConfigModule {
  static forroot(option: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'Config',
          useValue: ['fang', 'xiao', option],
        },
      ],
      exports: [
        {
          provide: 'Config',
          useValue: ['fang', 'xiao', option],
        },
      ],
    };
  }
}
