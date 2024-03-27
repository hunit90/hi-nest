import { Body, Controller, Post, Req } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Req() req: Request, @Body() postCreateDto: CreatePostDto) {
    return this.postService.create(req, postCreateDto);
  }
}
