import { Module } from '@nestjs/common';
import { ArticleController } from 'src/article/article.controller';
import { ArticleService } from 'src/article/article.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
