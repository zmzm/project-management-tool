import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userModel: typeof User) {}

  create(createUserInput: CreateUserInput) {
    return this.userModel.create(createUserInput);
  }

  findAll() {
    return this.userModel.findAll();
  }

  findById(id: number) {
    return this.userModel.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.findById(id);

    await user.update(updateUserInput);
    await user.save();

    return user;
  }

  async remove(id: number) {
    const user = await this.findById(id);

    await user.destroy();

    return id;
  }
}
