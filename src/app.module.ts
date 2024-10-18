import { Module, ValidationPipe } from '@nestjs/common';
import { UserModule } from './modules/userModules/User.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
