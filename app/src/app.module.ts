import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ormconfig } from 'src/ormconfig';
import { TagModule } from 'src/tag/tag.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
