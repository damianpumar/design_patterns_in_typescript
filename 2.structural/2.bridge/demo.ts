import { Pattern } from "../../Pattern";
import {
  Abstraction,
  RefinedAbstractionA,
  ConcreteImplementorA,
  RefinedAbstractionB,
  ConcreteImplementorB,
} from "./bridge";

export class BridgeDemo implements Pattern {
  show(): void {
    var abstractionA: Abstraction = new RefinedAbstractionA(
      new ConcreteImplementorA()
    );
    var abstractionB: Abstraction = new RefinedAbstractionB(
      new ConcreteImplementorB()
    );

    abstractionA.callIt("abstractionA");
    abstractionB.callIt("abstractionB");
  }
}
