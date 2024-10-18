import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async findCategoryById(id: string): Promise<CategoryDocument> {
    const category = await this.categoryModel
      .findById(id)
      .populate('posts')
      .exec();
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async createCategory(name: string): Promise<Category> {
    const newCategory = new this.categoryModel({ name });
    return newCategory.save();
  }

  async findAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().populate('posts').exec();
  }
}
