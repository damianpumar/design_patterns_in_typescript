import { Pattern } from "../../Pattern";
import { Builder } from "./prototype";

export class PrototypeDemo implements Pattern {
  private builder: Builder = new Builder();

  show(): void {
    let i = 0;

    for (i = 1; i <= 3; i += 1) {
      console.log(this.builder.createOne("c" + i).toString());
    }
  }
}
