import {
  IsArray,
  IsDate,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title!: string;

  @Type(() => Date)
  @IsDate()
  endDate!: Date;

  @IsArray()
  @IsString({ each: true })
  ages!: string[];

  @IsString()
  researchType!: string;

  @IsUrl()
  url!: string;

  @IsString()
  procedure!: string;

  @IsString()
  duration!: string;

  @IsString()
  @MaxLength(500)
  content!: string;
}
