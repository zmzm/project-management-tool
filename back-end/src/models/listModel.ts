import IBaseModel from './baseModel';

/* eslint camelcase: 0 */
/**
 * List object for database
 *
 * @export
 * @class RawList
 */
export class RawList {
  public id?: number;

  public list_name?: string;

  public board_id?: number;

  constructor(builder: List) {
    this.id = builder.getId();
    this.list_name = builder.Name;
    this.board_id = builder.BoardId;
  }
}

/**
 * List model class
 *
 * @export
 * @class List
 */
export class List implements IBaseModel {
  private id?: number;

  private listName: string;

  private boardId: number;

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

  public get Name(): string {
    return this.listName;
  }

  public get BoardId(): number {
    return this.boardId;
  }

  public setId(id: number): List {
    this.id = id;
    return this;
  }

  public setName(listName: string): List {
    this.listName = listName;
    return this;
  }

  public setBoardId(boardId: number): List {
    this.boardId = boardId;
    return this;
  }

  /**
   * Map JSON to List model
   *
   * @param {*} attributes
   * @returns {List}
   * @memberof List
   */
  public mapJson(attributes: any): List {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setBoardId(attributes.boardId);
      this.setName(attributes.listName);
    }
    return this;
  }

  /**
   * Map database model to List model
   *
   * @param {*} attributes
   * @returns {List}
   * @memberof List
   */
  public mapDatabaseObject(attributes: any): List {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setBoardId(attributes.board_id);
      this.setName(attributes.list_name);
    }
    return this;
  }

  /**
   * Convert List JSON to database List object
   *
   * @returns {RawList}
   * @memberof List
   */
  public toDatabaseObject(): RawList {
    return new RawList(this);
  }

  /**
   * Convert List model to JSON object
   *
   * @returns {List}
   * @memberof List
   */
  public toJson(): List {
    return new List(this);
  }
}
