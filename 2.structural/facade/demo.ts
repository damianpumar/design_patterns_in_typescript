import { Facade } from "./facade";
export class FacadeDemo {
  show(): void {
    const facade: Facade = new Facade();

    facade.operation1();

    facade.operation2();
  }
}
