import UserService from '../services/userService';
import BoardService from '../services/boardService';
import CardService from '../services/cardService';
import CommentService from '../services/commentService';
import ListService from '../services/listService';
import RoleService from '../services/roleService';
import TeamService from '../services/teamService';

export default class ServicesContext {
  static instance: ServicesContext;

  private boardService: BoardService;

  private cardService: CardService;

  private commentService: CommentService;

  private listService: ListService;

  private roleService: RoleService;

  private teamService: TeamService;

  private userService: UserService;

  static getInstance(): ServicesContext {
    if (!ServicesContext.instance) {
      ServicesContext.instance = new ServicesContext();
    }
    return ServicesContext.instance;
  }

  public get BoardService(): BoardService {
    return this.boardService;
  }

  public get CardService(): CardService {
    return this.cardService;
  }

  public get CommentService(): CommentService {
    return this.commentService;
  }

  public get ListService(): ListService {
    return this.listService;
  }

  public get RoleService(): RoleService {
    return this.roleService;
  }

  public get TeamService(): TeamService {
    return this.teamService;
  }

  public get UserService(): UserService {
    return this.userService;
  }

  public setBoardService(boardService: BoardService): ServicesContext {
    this.boardService = boardService;
    return this;
  }

  public setCardService(cardService: CardService): ServicesContext {
    this.cardService = cardService;
    return this;
  }

  public setCommentService(commentService: CommentService): ServicesContext {
    this.commentService = commentService;
    return this;
  }

  public setListService(listService: ListService): ServicesContext {
    this.listService = listService;
    return this;
  }

  public setRoleService(roleService: RoleService): ServicesContext {
    this.roleService = roleService;
    return this;
  }

  public setTeamService(teamService: TeamService): ServicesContext {
    this.teamService = teamService;
    return this;
  }

  public setUserService(userService: UserService): ServicesContext {
    this.userService = userService;
    return this;
  }
}
