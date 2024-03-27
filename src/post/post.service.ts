import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  create(req: Request, postCreateDto: CreatePostDto) {
    return true;
  }
}
