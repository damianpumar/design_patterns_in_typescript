import { Leaf, Composite } from "./composite";

export class CompositeDemo {
  show(): void {
    const leaf1 = new Leaf("1"),
      leaf2 = new Leaf("2"),
      leaf3 = new Leaf("3"),
      composite1 = new Composite("Comp1"),
      composite2 = new Composite("Comp2");

    composite1.add(leaf1);
    composite1.add(leaf2);
    composite1.add(leaf3);

    composite2.add(leaf1);
    composite2.add(leaf3);

    composite1.operation();
    composite2.operation();
  }
}
