import {
  Strategy,
  ConcreteStrategy1,
  ConcreteStrategy2,
  ConcreteStrategy3,
} from "./strategy";

export class StrategyDemo {
  show(): void {
    const strategies: Strategy[] = [];

    strategies.push(new ConcreteStrategy1());
    strategies.push(new ConcreteStrategy2());
    strategies.push(new ConcreteStrategy3());

    strategies.forEach((strategy) => {
      strategy.execute();
    });
  }
}
