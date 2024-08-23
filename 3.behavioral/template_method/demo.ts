import { ConcreteClass1, ConcreteClass2 } from "./templateMethod";

export class TemplateMethodDemo {
  show(): void {
    const c1: ConcreteClass1 = new ConcreteClass1(),
      c2: ConcreteClass2 = new ConcreteClass2();

    c1.templateMethod();
    c2.templateMethod();
  }
}
