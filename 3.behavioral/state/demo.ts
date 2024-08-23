import { Context, ConcreteStateA } from "./state";

export class StateDemo {
  show(): void {
    const context: Context = new Context(new ConcreteStateA());

    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
  }
}
