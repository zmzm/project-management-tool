import BaseModel from './baseModel';

/* eslint camelcase: 0 */
/**
 * Card object for database
 *
 * @export
 * @class RawCard
 */
export class RawCard {
  public id?: number

  public card_name?: string

  public about?: string

  public user_id?: number

  public list_id?: number

  public created_at?: Date

  constructor(builder: Card) {
    this.id = builder.getId();
    this.card_name = builder.Name;
    this.about = builder.About;
    this.user_id = builder.UserId;
    this.list_id = builder.ListId;
    this.created_at = builder.CreatedAt;
  }
}

/**
 * Card model class
 *
 * @export
 * @class Card
 */
export class Card implements BaseModel {
  private id?: number

  private cardName: string

  private about: string

  private userId?: number

  private listId?: number

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
    return this.cardName;
  }

  public get About(): string {
    return this.about;
  }

  public get UserId(): number {
    return <number>this.userId;
  }

  public get ListId(): number {
    return <number>this.listId;
  }

  public get CreatedAt(): Date {
    return <Date>this.created;
  }

  public setId(id: number): Card {
    this.id = id;
    return this;
  }

  public setName(cardName: string): Card {
    this.cardName = cardName;
    return this;
  }

  public setAbout(about: string): Card {
    this.about = about;
    return this;
  }

  public setUserId(userId: number): Card {
    this.userId = userId;
    return this;
  }

  public setListId(listId: number): Card {
    this.listId = listId;
    return this;
  }

  public setCreatedAt(createdAt: Date): Card {
    this.created = createdAt;
    return this;
  }

  /**
   * Map JSON to Card model
   *
   * @param {*} attributes
   * @returns {Card}
   * @memberof Card
   */
  public mapJson(attributes: any): Card {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.cardName);
      this.setAbout(attributes.about);
      this.setUserId(attributes.userId);
      this.setListId(attributes.listId);
      this.setCreatedAt(attributes.created);
    }
    return this;
  }

  /**
   * Map database model to Card model
   *
   * @param {*} attributes
   * @returns {Card}
   * @memberof Card
   */
  public mapDatabaseObject(attributes: any): Card {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setName(attributes.card_name);
      this.setAbout(attributes.about);
      this.setUserId(attributes.user_id);
      this.setListId(attributes.list_id);
      this.setCreatedAt(attributes.created_at);
    }
    return this;
  }

  /**
   * Convert Card JSON to database Card object
   *
   * @returns {RawCard}
   * @memberof Card
   */
  public toDatabaseObject(): RawCard {
    return new RawCard(this);
  }

  /**
   * Convert Card model to JSON object
   *
   * @returns {Card}
   * @memberof Card
   */
  public toJson(): Card {
    return new Card(this);
  }
}
