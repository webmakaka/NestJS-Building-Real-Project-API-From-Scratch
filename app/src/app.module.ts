import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TagModule } from 'src/tag/tag.mogule';

@Module({
  imports: [TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
