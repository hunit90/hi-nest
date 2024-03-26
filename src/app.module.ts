import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './config/typeorm.config';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfig,
    }),
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
