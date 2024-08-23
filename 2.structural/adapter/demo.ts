import { Pattern } from "../../Pattern";
import { Adapter } from "./adapter";

export class AdapterDemo implements Pattern {
  show(): void {
    const adapter: Adapter = new Adapter();

    adapter.call();
  }
}
