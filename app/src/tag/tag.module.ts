import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from 'src/tag/tag.controller';
import { TagEntity } from 'src/tag/tag.entity';
import { TagService } from 'src/tag/tag.service';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
