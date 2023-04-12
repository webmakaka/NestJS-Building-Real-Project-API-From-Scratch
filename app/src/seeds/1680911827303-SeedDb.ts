import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1680911827303 implements MigrationInterface {
  name = 'SeedDb1680911827303';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    await queryRunner.query(
      // password is pass123
      `INSERT INTO users (username, email, password) VALUES ('marley', 'marley@example.com', '$2b$10$f/mEfLfbBI0bC/rDXjlC3.EV.MGKVr75h8uGpGwQVpkJe3cqNS3a6')`,
    );

    await queryRunner.query(
      // password is pass123
      `INSERT INTO users (username, email, password) VALUES ('webmakaka', 'webmakaka@example.com', '$2b$10$PVuzmCrUkLUBGJ/Y0CABvOGMf.W9i4KGK5uDzy3NEjfd6BFpflmh6')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article desc', 'First article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'Second article desc', 'Second article body', 'coffee,nestjs', 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
