import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.schema';
import { UserService } from '../userModules/user.service';
import { CategoryService } from '../categoryModules/category.service';
import { UserDocument } from '../userModules/user.schema';
import { CategoryDocument } from '../categoryModules/category.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
  ) {}

  async createPost(
    title: string,
    content: string,
    userId: string,
    categoryIds: string[],
    featuredImage?: string,
  ): Promise<Post> {
    const user: UserDocument = await this.userService.findUserById(userId);
    const categories: CategoryDocument[] = await Promise.all(
      categoryIds.map((id) => this.categoryService.findCategoryById(id)),
    );

    const newPost = new this.postModel({
      title,
      content,
      user: user._id,
      categories: categories.map((category) => category._id),
      featuredImage,
    });

    const post = await newPost.save();

    user.posts.push(post._id as any);
    await user.save();

    for (const category of categories) {
      category.posts.push(post._id as any);
      await category.save();
    }

    return post;
  }

  async findAllPosts(): Promise<Post[]> {
    return this.postModel.find().populate('user categories').exec();
  }

  async findPostById(id: string): Promise<Post> {
    const post = await this.postModel
      .findById(id)
      .populate('user categories')
      .exec();
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }
}
