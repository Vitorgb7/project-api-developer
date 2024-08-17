import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersModule } from './developers/developers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from './developers/entities/developer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.aqlite',
      entities: [__dirname + '/**/*.entity/{.ts,.js}', Developer],
      synchronize: true,
    }),
    DevelopersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
