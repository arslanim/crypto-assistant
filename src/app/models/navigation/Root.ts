export class Root {
  public title: string;
  public component: any;
  public isInitial: boolean;

  constructor(title: string, component: any, isInitial: boolean = false) {
    this.title = title;
    this.component = component;
    this.isInitial = isInitial;
  }
}
