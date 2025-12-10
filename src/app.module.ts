import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './modules/course/course.module';
import { BranchModule } from './modules/branch/branch.module';

@Module({
  imports: [PrismaModule, BranchModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
