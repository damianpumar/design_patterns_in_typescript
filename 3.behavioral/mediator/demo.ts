import { Pattern } from "../../Pattern";
import {
  ConcreteMediator,
  ConcreteColleagueA,
  ConcreteColleagueB,
} from "./mediator";

export class MediatorDemo implements Pattern {
  show(): void {
    var cm: ConcreteMediator = new ConcreteMediator(),
      B: ConcreteColleagueA = new ConcreteColleagueA(cm),
      A: ConcreteColleagueB = new ConcreteColleagueB(cm);

    cm.concreteColleagueA = B;
    cm.concreteColleagueB = A;

    B.send("`send` of ConcreteColleagueA is being called!");
    A.send("`send` of ConcreteColleagueB is being called!");
  }
}
