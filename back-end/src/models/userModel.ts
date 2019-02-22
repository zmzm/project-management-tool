import IBaseModel from './baseModel';

/* eslint camelcase: 0 */
/**
 * User object for database
 *
 * @export
 * @class RawUser
 */
export class RawUser {
  public id?: number;

  public email?: string;

  public password?: string;

  public role_id?: number;

  public team_id?: number;

  public first_name?: string;

  public last_name?: string;

  public created_at?: Date;

  public updated_at?: Date;

  constructor(builder: User) {
    this.id = builder.getId();
    this.email = builder.Email;
    this.password = builder.Password;
    this.role_id = builder.RoleId;
    this.team_id = builder.TeamId;
    this.first_name = builder.FirstName;
    this.last_name = builder.LastName;
    this.created_at = builder.CreatedAt;
    this.updated_at = builder.UpdatedAt;
  }
}

/**
 * User model class
 *
 * @export
 * @class User
 */
export class User implements IBaseModel {
  private id?: number;

  private email: string;

  private password: string;

  private roleId?: number;

  private teamId?: number;

  private firstName: string;

  private lastName: string;

  private created?: Date;

  private updated?: Date;

  constructor(attributes?: any, isRaw: boolean = true) {
    if (attributes) {
      if (isRaw) {
        this.mapDatabaseObject(attributes);
      } else {
        this.mapJson(attributes);
      }
    }
  }

  public getId(): number {
    return this.id as number;
  }

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public get RoleId(): number {
    return this.roleId as number;
  }

  public get TeamId(): number {
    return this.teamId as number;
  }

  public get FirstName(): string {
    return this.firstName;
  }

  public get LastName(): string {
    return this.lastName;
  }

  public get CreatedAt(): Date {
    return this.created as Date;
  }

  public get UpdatedAt(): Date {
    return this.updated as Date;
  }

  public setId(id: number): User {
    this.id = id;
    return this;
  }

  public setEmail(email: string): User {
    this.email = email;
    return this;
  }

  public setPassword(password: string): User {
    this.password = password;
    return this;
  }

  public setRoleId(roleId: number): User {
    this.roleId = roleId;
    return this;
  }

  public setTeamId(teamId: number): User {
    this.teamId = teamId;
    return this;
  }

  public setFirstName(firstName: string): User {
    this.firstName = firstName;
    return this;
  }

  public setLastName(lastName: string): User {
    this.lastName = lastName;
    return this;
  }

  public setCreatedAt(createdAt: Date): User {
    this.created = createdAt;
    return this;
  }

  public setUpdatedAt(updatedAt: Date): User {
    this.updated = updatedAt;
    return this;
  }

  /**
   * Map JSON to User model
   *
   * @param {*} attributes
   * @returns {User}
   * @memberof User
   */
  public mapJson(attributes: any): User {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setEmail(attributes.email);
      this.setPassword(attributes.password);
      this.setRoleId(attributes.roleId);
      this.setTeamId(attributes.teamId);
      this.setFirstName(attributes.firstName);
      this.setLastName(attributes.lastName);
      this.setCreatedAt(attributes.created);
      this.setUpdatedAt(attributes.updated);
    }
    return this;
  }

  /**
   * Map database model to User model
   *
   * @param {*} attributes
   * @returns {User}
   * @memberof User
   */
  public mapDatabaseObject(attributes: any): User {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setEmail(attributes.email);
      this.setPassword(attributes.password);
      this.setRoleId(attributes.role_id);
      this.setTeamId(attributes.team_id);
      this.setFirstName(attributes.first_name);
      this.setLastName(attributes.last_name);
      this.setCreatedAt(attributes.created_at);
      this.setUpdatedAt(attributes.updated_at);
    }
    return this;
  }

  /**
   * Convert User JSON to database user object
   *
   * @returns {RawUser}
   * @memberof User
   */
  public toDatabaseObject(): RawUser {
    return new RawUser(this);
  }

  /**
   * Convert User model to JSON object
   *
   * @returns {User}
   * @memberof User
   */
  public toJson(): User {
    return new User(this);
  }
}
