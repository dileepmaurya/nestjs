import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'models';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Category> {
        const category = await this.categoryService.findOne(id);
        if(!category) {
            throw new HttpException('Category not found', HttpStatus.NOT_FOUND)
        }

        return category;
    }

    @Post()
    async create(@Body() createCategoryDTo: CreateCategoryDto ): Promise<Category> {
        return this.categoryService.create(createCategoryDTo);
    }
}