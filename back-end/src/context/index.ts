import ServicesContext from './servicesContext';

export default class Context<A> {
  private args: A;

  private services: ServicesContext;

  constructor(services: ServicesContext) {
    this.services = services;
  }

  public get Args(): A {
    return this.args;
  }

  public get Services(): ServicesContext {
    return this.services;
  }

  public setResolveArgument(args: A): void {
    this.args = args;
  }
}
