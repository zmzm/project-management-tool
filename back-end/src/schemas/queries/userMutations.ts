import User from '../../entities/user';
import Context from '../../context';

export default class UserMutation {
  private context: Context<any>;

  public async deleteUser(root: any, args: any, context: Context<any>): Promise<void> {
    this.context = context;
    await this.context.Services.UserService.delete(args.id);
  }
}
