import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'models';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product])
    ],
    providers: [ProductService],
    controllers: [ProductController]
})
export class ProductModule{}
