import { Pattern } from "../../Pattern";
import { AbstractProduct, ProductFactory } from "./factoryMethod";

export class FactoryDemo implements Pattern {
  show(): void {
    const a: AbstractProduct = ProductFactory.createProduct("A");
    const b: AbstractProduct = ProductFactory.createProduct("B");
    const c: AbstractProduct = ProductFactory.createProduct("C");

    a.method();
    b.method();
    c.method();
  }
}
