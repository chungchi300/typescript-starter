import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dockerPassword',
      database: 'nestBoilerplate',
      entities: [Photo],
      // synchronize: true,
      // keepConnectionAlive: true,
      // retryAttempts: 2,
      // retryDelay: 1000,
    }),
    PhotoModule,
  ],
})
export class ApplicationModule {}
