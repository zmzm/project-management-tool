import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(private readonly roleModel: typeof Role) {}

  create(createRoleInput: CreateRoleInput) {
    return this.roleModel.create(createRoleInput);
  }

  findAll() {
    return this.roleModel.findAll();
  }

  findById(id: number) {
    return this.roleModel.findOne({ where: { id } });
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    const role = await this.findById(id);

    await role.update(updateRoleInput);
    await role.save();

    return role;
  }

  async remove(id: number) {
    const role = await this.findById(id);

    await role.destroy();

    return id;
  }
}
