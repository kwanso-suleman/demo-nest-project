import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dbConnection/database.module';
import { photoProviders } from './photo.provider';
import { PhotoService } from './photo.service';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
