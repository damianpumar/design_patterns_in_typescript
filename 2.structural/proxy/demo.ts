import { Pattern } from "../../Pattern";
import { Proxy } from "./proxy";

export class ProxyDemo implements Pattern {
  show(): void {
    const proxy1: Proxy = new Proxy("proxy1");

    const proxy2: Proxy = new Proxy("proxy2");

    proxy1.doAction();
    proxy1.doAction();
    proxy2.doAction();
    proxy2.doAction();
    proxy1.doAction();
  }
}
