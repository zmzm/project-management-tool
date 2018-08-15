import User from '../entities/user';

export default class UserModel {
  private id?: number

  private email: string

  private password: string

  private roleId?: number

  private teamId?: number

  private firstName: string

  private lastName: string

  private created?: string

  private updated?: string

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.created = user.created;
    this.updated = user.updated;
  }

  public get Id(): number {
    return this.id;
  }

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public get RoleId(): number {
    return this.roleId;
  }

  public get TeamId(): number {
    return this.teamId;
  }

  public get FirstName(): string {
    return this.firstName;
  }

  public get LastName(): string {
    return this.lastName;
  }

  public get CreatedAt(): string {
    return this.created;
  }

  public get UpdatedAt(): string {
    return this.updated;
  }
}
