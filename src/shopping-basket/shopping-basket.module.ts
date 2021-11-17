import { Module } from '@nestjs/common';
import { ShoppingBasketService } from './shopping-basket.service';

@Module({
  providers: [ShoppingBasketService],
})
export class ShoppingBasketModule {}
