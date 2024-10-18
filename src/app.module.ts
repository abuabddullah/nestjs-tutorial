import { Module } from '@nestjs/common';
import { UserModule } from './modules/userModules/User.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
