import { Pattern } from "../../Pattern";
import { FlyweightFactory, ConcreteFlyweight } from "./flyweight";

export class FlyweightDemo implements Pattern {
  show(): void {
    const factory: FlyweightFactory = new FlyweightFactory();

    const conc1: ConcreteFlyweight = <ConcreteFlyweight>(
      factory.getFlyweight("conc1")
    );

    const conc2: ConcreteFlyweight = <ConcreteFlyweight>(
      factory.getFlyweight("conc2")
    );

    conc1.operation("1");
    conc2.operation("2");
  }
}
