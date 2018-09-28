import BaseModel from './baseModel';

/* eslint camelcase: 0 */
/**
 * Role object for database
 *
 * @export
 * @class RawRole
 */
export class RawRole {
  public id?: number

  public role_name?: string

  constructor(builder: Role) {
    this.id = builder.getId();
    this.role_name = builder.Name;
  }
}

/**
 * Role model class
 *
 * @export
 * @class Role
 */
export class Role implements BaseModel {
  private id?: number

  private roleName: string

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
    return <number>this.id;
  }

  public get Name(): string {
    return this.roleName;
  }

  public setId(id: number): Role {
    this.id = id;
    return this;
  }

  public setName(roleName: string): Role {
    this.roleName = roleName;
    return this;
  }

  /**
   * Map JSON to Role model
   *
   * @param {*} attributes
   * @returns {Role}
   * @memberof Role
   */
  public mapJson(attributes: any): Role {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.name);
    }
    return this;
  }

  /**
   * Map database model to Role model
   *
   * @param {*} attributes
   * @returns {Role}
   * @memberof Role
   */
  public mapDatabaseObject(attributes: any): Role {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.name);
    }
    return this;
  }

  /**
   * Convert Role JSON to database role object
   *
   * @returns {RawRole}
   * @memberof Role
   */
  public toDatabaseObject(): RawRole {
    return new RawRole(this);
  }

  /**
   * Convert Role model to JSON object
   *
   * @returns {Role}
   * @memberof Role
   */
  public toJson(): Role {
    return new Role(this);
  }
}
