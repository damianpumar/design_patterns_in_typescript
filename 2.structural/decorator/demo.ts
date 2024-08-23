import { Pattern } from "../../Pattern";
import { Component, ConcreteComponent, ConcreteDecorator } from "./decorator";

export class DecoratorDemo implements Pattern {
  show(): void {
    const componentDecorated: Component = new ConcreteComponent();

    const componentDecorator: Component = new ConcreteDecorator(
      componentDecorated
    );

    componentDecorator.operation();
  }
}
