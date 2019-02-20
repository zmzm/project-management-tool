import BaseModel from './baseModel';

/* eslint camelcase: 0 */
/**
 * Team object for database
 *
 * @export
 * @class RawTeam
 */
export class RawTeam {
  public id?: number

  public team_name?: string

  constructor(builder: Team) {
    this.id = builder.getId();
    this.team_name = builder.Name;
  }
}

/**
 * Team model class
 *
 * @export
 * @class Team
 */
export class Team implements BaseModel {
  private id?: number

  private teamName: string

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
    return this.teamName;
  }

  public setId(id: number): Team {
    this.id = id;
    return this;
  }

  public setName(teamName: string): Team {
    this.teamName = teamName;
    return this;
  }

  /**
   * Map JSON to Team model
   *
   * @param {*} attributes
   * @returns {Team}
   * @memberof Team
   */
  public mapJson(attributes: any): Team {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.teamName);
    }
    return this;
  }

  /**
   * Map database model to Team model
   *
   * @param {*} attributes
   * @returns {Team}
   * @memberof Team
   */
  public mapDatabaseObject(attributes: any): Team {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.team_name);
    }
    return this;
  }

  /**
   * Convert Team JSON to database team object
   *
   * @returns {RawTeam}
   * @memberof Team
   */
  public toDatabaseObject(): RawTeam {
    return new RawTeam(this);
  }

  /**
   * Convert Team model to JSON object
   *
   * @returns {Team}
   * @memberof Team
   */
  public toJson(): Team {
    return new Team(this);
  }
}
