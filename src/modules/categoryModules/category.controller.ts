import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategories() {
    return this.categoryService.findAllCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoryService.findCategoryById(id);
  }

  @Post()
  createCategory(@Body('name') name: string) {
    return this.categoryService.createCategory(name);
  }
}
