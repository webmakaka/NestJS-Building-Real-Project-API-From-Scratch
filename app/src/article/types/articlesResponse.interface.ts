import { ArticleType } from 'src/article/types/article.type';

export interface ArticlesResponseInterface {
  articles: ArticleType[];
  articlesCount: number;
}
