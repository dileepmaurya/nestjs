import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'models';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>){}

    async findAll(): Promise<Category[]> {
        return this.categoryRepository.find({
            where: {
                isActive: true
            }
        });
    }

    async findOne(id: string): Promise<Category|null> {
        return this.categoryRepository.findOne({
            where: {
                id
            },
            relations:['products']
        })
    }

    async create(createCategoryDTo: CreateCategoryDto): Promise<Category> {
        
        const category = await this.categoryRepository.create({
            categoryName: createCategoryDTo.name,
            description: createCategoryDTo.description,
            isActive: createCategoryDTo.isActive
        })
        return this.categoryRepository.save(category);
    }
}