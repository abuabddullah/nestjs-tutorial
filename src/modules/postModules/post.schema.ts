import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../userModules/user.schema';
import { Category } from '../categoryModules/category.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Category' }] })
  categories: Category[];

  @Prop()
  featuredImage: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
