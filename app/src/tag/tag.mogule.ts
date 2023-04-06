import { Module } from '@nestjs/common';
import { TagController } from 'src/tag/tag.controller';

@Module({
  controllers: [TagController],
})
export class TagModule {}
