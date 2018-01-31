import { Component } from "@angular/core";

export class Root {
  public title: string;
  public component: Component;
  public isInitial: boolean;

  constructor(title: string, component: Component, isInitial: boolean = false) {
    this.title = title;
    this.component = component;
    this.isInitial = isInitial;
  }
}
