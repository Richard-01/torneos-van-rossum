import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/configDB';
import { ResultsModule } from './modules/results/results.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { PlayersModule } from './modules/players/players.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,
      envFilePath: '.env'
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: config().database.host,
        port: config().database.port,
        username: config().database.username,
        password: config().database.password,
        database: config().database.database,
        autoLoadEntities: true,
        synchronize: true,
        entities: [],
        extra: {
          ssl: true
        },
        ssl: process.env.DB_SSL === 'true',
      })
  ],
  controllers: [
    PlayersModule,
    TournamentsModule,
    ResultsModule,
  ],
  providers: [],
})
export class AppModule {}
