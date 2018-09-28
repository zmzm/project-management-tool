import BaseModel from './baseModel';

/* eslint camelcase: 0 */
/**
 * Board object for database
 *
 * @export
 * @class RawBoard
 */
export class RawBoard {
  public id?: number

  public board_name?: string

  public is_closed?: boolean

  public team_id?: number

  public created_at?: Date

  constructor(builder: Board) {
    this.id = builder.getId();
    this.board_name = builder.Name;
    this.is_closed = builder.IsClosed;
    this.team_id = builder.TeamId;
    this.created_at = builder.CreatedAt;
  }
}

/**
 * Board model class
 *
 * @export
 * @class Board
 */
export class Board implements BaseModel {
  private id?: number

  private boardName: string

  private isClosed: boolean

  private teamId?: number

  private created?: Date

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
    return this.boardName;
  }

  public get IsClosed(): boolean {
    return this.isClosed;
  }

  public get TeamId(): number {
    return <number>this.teamId;
  }

  public get CreatedAt(): Date {
    return <Date>this.created;
  }

  public setId(id: number): Board {
    this.id = id;
    return this;
  }

  public setName(boardName: string): Board {
    this.boardName = boardName;
    return this;
  }

  public setIsClosed(isClosed: boolean): Board {
    this.isClosed = isClosed;
    return this;
  }

  public setTeamId(teamId: number): Board {
    this.teamId = teamId;
    return this;
  }

  public setCreatedAt(createdAt: Date): Board {
    this.created = createdAt;
    return this;
  }

  /**
   * Map JSON to Board model
   *
   * @param {*} attributes
   * @returns {Board}
   * @memberof Board
   */
  public mapJson(attributes: any): Board {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.teamName);
      this.setIsClosed(attributes.isClosed);
      this.setTeamId(attributes.teamId);
      this.setCreatedAt(attributes.created);
    }
    return this;
  }

  /**
   * Map database model to Board model
   *
   * @param {*} attributes
   * @returns {Board}
   * @memberof Board
   */
  public mapDatabaseObject(attributes: any): Board {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.team_name);
      this.setIsClosed(attributes.is_closed);
      this.setTeamId(attributes.team_id);
      this.setCreatedAt(attributes.created_at);
    }
    return this;
  }

  /**
   * Convert Board JSON to database Board object
   *
   * @returns {RawBoard}
   * @memberof Board
   */
  public toDatabaseObject(): RawBoard {
    return new RawBoard(this);
  }

  /**
   * Convert Board model to JSON object
   *
   * @returns {Board}
   * @memberof Board
   */
  public toJson(): Board {
    return new Board(this);
  }
}
