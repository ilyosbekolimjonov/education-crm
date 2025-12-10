import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './modules/course/course.module';
import { BranchModule } from './modules/branch/branch.module';
import { GroupModule } from './modules/group/group.module';
import { RoomModule } from './modules/room/room.module';

@Module({
  imports: [PrismaModule, BranchModule, CourseModule, GroupModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
