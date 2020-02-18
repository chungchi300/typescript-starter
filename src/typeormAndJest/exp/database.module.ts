import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';

@Module({})
export class DatabaseModule {
  static async forRoot(): Promise<DynamicModule> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'dockerPassword',
          database: 'nestBoilerplate',
          entities: [Photo],
          synchronize: true,
          // keepConnectionAlive: true,
          // retryAttempts: 2,
          // retryDelay: 1000,
        }),
      ],
    };
  }
}
