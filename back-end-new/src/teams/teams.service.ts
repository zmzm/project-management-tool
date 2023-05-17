import { Injectable } from '@nestjs/common';
import { CreateTeamInput } from './dto/create-team.input';
import { UpdateTeamInput } from './dto/update-team.input';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(private readonly teamModel: typeof Team) {}

  create(createTeamInput: CreateTeamInput) {
    return this.teamModel.create(createTeamInput);
  }

  findAll() {
    return this.teamModel.findAll();
  }

  findById(id: number) {
    return this.teamModel.findOne({ where: { id } });
  }

  async update(id: number, updateTeamInput: UpdateTeamInput) {
    const team = await this.findById(id);

    await team.update(updateTeamInput);
    await team.save();

    return team;
  }

  async remove(id: number) {
    const team = await this.findById(id);

    await team.destroy();

    return id;
  }
}
