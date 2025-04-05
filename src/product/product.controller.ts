import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from 'models';
import { CreateProductDto } from "./dto/create-product.dto";

@Controller('products')
export class ProductController{
    constructor(private productService: ProductService){}

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<Product | null> {
        const product = this.productService.find(id);
        if (!product) {
            throw new HttpException("Product not found", HttpStatus.NOT_FOUND)
        }

        return product;
    }

    @Post()
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto);
    }
}