import User from '../../entities/user';
import Context from '../../context';

export default class UsersQuery {
  private context: Context<any>;

  public async findUserByEmail(root: any, args: any, context: Context<any>): Promise<User> {
    this.context = context;
    const users = await this.context.Services.UserService.findByEmail(args.email);
    return users;
  }
}
