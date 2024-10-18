import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPosts() {
    return this.postService.findAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.findPostById(id);
  }

  @Post()
  createPost(
    @Body('title') title: string,
    @Body('content') content: string,
    @Body('userId') userId: string,
    @Body('categoryIds') categoryIds: string[],
    @Body('featuredImage') featuredImage?: string,
  ) {
    return this.postService.createPost(
      title,
      content,
      userId,
      categoryIds,
      featuredImage,
    );
  }
}
