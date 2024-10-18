import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post, PostSchema } from './post.schema';
import { UserModule } from '../userModules/user.module';
import { CategoryModule } from '../categoryModules/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    UserModule,
    CategoryModule,
  ],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
