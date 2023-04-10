import { ArticleEntity } from 'src/article/article.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimestamp'>;
