import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from 'typeormAndJest/exp/app.module';

@Module({
  imports: [ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
