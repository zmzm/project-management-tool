import BaseModel from './baseModel';

/* eslint camelcase: 0 */
/**
 * Comment object for database
 *
 * @export
 * @class RawComment
 */
export class RawComment {
  public id?: number

  public comment_text?: string

  public user_id?: number

  public card_id?: number

  public created_at?: Date

  constructor(builder: Comment) {
    this.id = builder.getId();
    this.comment_text = builder.Text;
    this.user_id = builder.UserId;
    this.card_id = builder.CardId;
    this.created_at = builder.CreatedAt;
  }
}

/**
 * Comment model class
 *
 * @export
 * @class Comment
 */
export class Comment implements BaseModel {
  private id?: number

  private commentText: string

  private userId?: number

  private cardId?: number

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
    return this.id;
  }

  public get Text(): string {
    return this.commentText;
  }

  public get UserId(): number {
    return this.userId;
  }

  public get CardId(): number {
    return this.cardId;
  }

  public get CreatedAt(): Date {
    return this.created;
  }

  public setId(id: number): Comment {
    this.id = id;
    return this;
  }

  public setText(commentText: string): Comment {
    this.commentText = commentText;
    return this;
  }

  public setUserId(userId: number): Comment {
    this.userId = userId;
    return this;
  }

  public setCardId(cardId: number): Comment {
    this.cardId = cardId;
    return this;
  }

  public setCreatedAt(createdAt: Date): Comment {
    this.created = createdAt;
    return this;
  }

  /**
   * Map JSON to Comment model
   *
   * @param {*} attributes
   * @returns {Comment}
   * @memberof Comment
   */
  public mapJson(attributes: any): Comment {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setText(attributes.commentText);
      this.setUserId(attributes.userId);
      this.setCardId(attributes.cardId);
      this.setCreatedAt(attributes.created);
    }
    return this;
  }

  /**
   * Map database model to Comment model
   *
   * @param {*} attributes
   * @returns {Comment}
   * @memberof Comment
   */
  public mapDatabaseObject(attributes: any): Comment {
    if (attributes !== undefined) {
      this.setId(attributes.id);
      this.setText(attributes.comment_text);
      this.setUserId(attributes.user_id);
      this.setCardId(attributes.card_id);
      this.setCreatedAt(attributes.created_at);
    }
    return this;
  }

  /**
   * Convert Comment JSON to database Comment object
   *
   * @returns {RawComment}
   * @memberof Comment
   */
  public toDatabaseObject(): RawComment {
    return new RawComment(this);
  }

  /**
   * Convert Comment model to JSON object
   *
   * @returns {Comment}
   * @memberof Comment
   */
  public toJson(): Comment {
    return new Comment(this);
  }
}
