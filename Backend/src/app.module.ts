import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionsModule } from './champions/champions.module';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module';
import { HttpModule } from '@nestjs/axios/dist';
@Module({
  imports: [ChampionsModule, ConfigModule, ItemModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
