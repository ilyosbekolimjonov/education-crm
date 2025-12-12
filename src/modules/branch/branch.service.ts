import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchService {
  constructor(private prisma: PrismaService) { }

  async create(createBranchDto: CreateBranchDto) {
    return this.prisma.branch.create({
      data: createBranchDto,
    });
  }

  async findAll() {
    return this.prisma.branch.findMany({
      include: {
        rooms: true,
        courses: true,
        _count: {
          select: {
            teachers: true,
            students: true,
            groups: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const branch = await this.prisma.branch.findUnique({
      where: { id },
      include: {
        rooms: true,
        courses: true,
        groups: true,
        teachers: true,
        students: true,
        staffs: true,
      },
    });

    if (!branch) {
      throw new NotFoundException(`Branch with ID ${id} not found`);
    }

    return branch;
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    await this.findOne(id); // Check if exists

    return this.prisma.branch.update({
      where: { id },
      data: updateBranchDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.branch.delete({
      where: { id },
    });

    return {
      success: true,
      message: `Branch with id <${id}> deleted successfully`,
    };
  }
}