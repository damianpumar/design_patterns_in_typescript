import { Pattern } from "../../Pattern";
import {
  Handler,
  ConcreteHandler1,
  ConcreteHandler2,
  ConcreteHandler3,
} from "./chainOfResponsibility";

export class ChainOfResponsibilityDemo implements Pattern {
  show(): void {
    var h1: Handler, h2: Handler, h3: Handler;

    h1 = new ConcreteHandler1();
    h2 = new ConcreteHandler2();
    h3 = new ConcreteHandler3();

    h1.setHandler(h2);
    h2.setHandler(h3);

    h1.operation();
  }
}
