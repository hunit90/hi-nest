import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entity/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  create(req: Request, postCreateDto: CreatePostDto) {
    const post = new Post();
    post.title = postCreateDto.title;
    post.endDate = postCreateDto.endDate;
    post.ages = postCreateDto.ages;
    post.url = postCreateDto.url;
    post.content = postCreateDto.content;
    return this.postRepository.save(post);
  }

  findOne(id: number) {
    return this.postRepository.findOne({
      where: { id },
      relations: ['author'],
    });
  }

  async findPopular() {
    const today = new Date();

    const [data, count] = await this.postRepository.findAndCount({
      where: {
        endDate: MoreThanOrEqual(today),
        viewCount: MoreThanOrEqual(50),
      },
      take: 10,
      relations: ['author'],
      order: {
        viewCount: 'DESC',
      },
    });
  }
}
