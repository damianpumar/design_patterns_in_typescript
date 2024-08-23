import { Pattern } from "../../Pattern";
import { ConcreteSubject, ConcreteObserver } from "./observer";

export class ObserverDemo implements Pattern {
  show(): void {
    var sub: ConcreteSubject = new ConcreteSubject();

    sub.register(new ConcreteObserver(sub, "Jancsi"));
    sub.register(new ConcreteObserver(sub, "Julcsa"));
    sub.register(new ConcreteObserver(sub, "Marcsa"));

    sub.SubjectState = 123;
    sub.notify();
  }
}
