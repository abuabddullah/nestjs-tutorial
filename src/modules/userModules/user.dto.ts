import { IsNotEmpty, IsNumber } from 'class-validator';

export class UserDataType_DTO {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;
}
