import { Pattern } from "../../Pattern";
import {
  ConcreteFactory1,
  Tester,
  ConcreteFactory2,
  AbstractFactory,
} from "./abstractFactory";

export class AbstractFactoryDemo implements Pattern {
  show(): void {
    const factory1: AbstractFactory = new ConcreteFactory1();
    const tester1: Tester = new Tester(factory1);

    tester1.test();

    const factory2: AbstractFactory = new ConcreteFactory2();
    const tester2: Tester = new Tester(factory2);
    tester2.test();
  }
}
