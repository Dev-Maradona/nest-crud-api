import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/custmoer.model';
import { Customer, Project } from './typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [Customer, Project],
      synchronize: true,
      // autoLoadEntities: true, // will auto load all entities in project
    }),
    CustomerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }