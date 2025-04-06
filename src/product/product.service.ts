import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from 'models';
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(Product) private productRepository:Repository<Product> ){}

    async findAll(): Promise<Product[]> {
        return this.productRepository.find(
            {
                relations: {
                    category: true
                }
            }
        )
    }

    async find(id: string): Promise<Product | null>{
        return this.productRepository.findOne({
            where: {
                id
            }
        });
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const product = this.productRepository.create({
            productName: createProductDto.name,
            description: createProductDto.description,
            price: createProductDto.price,
            stockQuantity: createProductDto.quantity,
            categoryId: createProductDto.category
        });

        return this.productRepository.save(product);
    }
}