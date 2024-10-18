import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Post } from '../postModules/post.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })
  posts: Post[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
