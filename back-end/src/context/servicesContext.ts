import UserService from '../services/userService';

export default class ServicesContext {
  static instance: ServicesContext;

  private userService: UserService;

  static getInstance(): ServicesContext {
    if (!ServicesContext.instance) {
      ServicesContext.instance = new ServicesContext();
    }
    return ServicesContext.instance;
  }

  public get UserService(): UserService {
    return this.userService;
  }

  public setUserService(userService: UserService): ServicesContext {
    this.userService = userService;
    return this;
  }
}
