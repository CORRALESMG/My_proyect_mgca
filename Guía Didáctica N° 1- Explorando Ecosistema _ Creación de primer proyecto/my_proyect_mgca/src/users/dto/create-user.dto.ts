import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'usuario@empresa.com' })
  email: string;

  @ApiProperty({ required: true, example: 'John Doe' })
  name: string;

  @ApiProperty({ required: true, example: 'password123' })
  password: string;

  @ApiProperty({ required: false, example: '8888-8888' })
  telephone?: string;

  @ApiProperty({
    required: true,
    example: 'pega-aqui-el-id-de-un-tenant',
    description: 'ID del tenant',
  })
  tenantId: string;
}