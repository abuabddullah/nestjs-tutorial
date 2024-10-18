import { Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/userModules/user.module';
import { PostModule } from './modules/postModules/post.module';
import { CategoryModule } from './modules/categoryModules/category.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://asifaowadud:sof6vxfRNfUEvdCg@cluster0.gjcwx8p.mongodb.net/nestjs_tutorial?retryWrites=true&w=majority&appName=Cluster0`,
    ), // Replace with your MongoDB URI
    UserModule,
    PostModule,
    CategoryModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
