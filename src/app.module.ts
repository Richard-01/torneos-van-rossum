import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/configDB';

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
  controllers: [],
  providers: [],
})
export class AppModule {}
