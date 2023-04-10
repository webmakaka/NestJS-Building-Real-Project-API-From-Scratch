import { ArticleEntity } from 'src/article/article.entity';

export interface ArticlesResponseInterface {
  articles: ArticleEntity[];
  articlesCount: number;
}
