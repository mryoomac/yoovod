import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorController } from './actor/actor.controller';
import { CompanyController } from './company/company.controller';
import { CustomerController } from './customer/customer.controller';
import { DirectorController } from './director/director.controller';
import { InvoiceController } from './invoice/invoice.controller';
import { MovieController } from './movie/movie.controller';
import { OrderController } from './order/order.controller';
import { ShoppingBasketController } from './shopping-basket/shopping-basket.controller';
import { ActorModule } from './actor/actor.module';
import { CompanyModule } from './company/company.module';
import { CustomerModule } from './customer/customer.module';
import { DirectorModule } from './director/director.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MovieModule } from './movie/movie.module';
import { OrderModule } from './order/order.module';
import { ShoppingBasketModule } from './shopping-basket/shopping-basket.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ActorModule,
    CompanyModule,
    CustomerModule,
    DirectorModule,
    InvoiceModule,
    MovieModule,
    OrderModule,
    ShoppingBasketModule,
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [
    AppController,
    ActorController,
    CompanyController,
    CustomerController,
    DirectorController,
    InvoiceController,
    MovieController,
    OrderController,
    ShoppingBasketController,
  ],
  providers: [AppService],
})
export class AppModule {}
