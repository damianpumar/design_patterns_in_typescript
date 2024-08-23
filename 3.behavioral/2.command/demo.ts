import { Pattern } from "../../Pattern";
import {
  Receiver,
  Command,
  ConcreteCommand1,
  ConcreteCommand2,
  Invoker,
} from "./command";

export class CommandDemo implements Pattern {
  show(): void {
    const receiver: Receiver = new Receiver(),
      command1: Command = new ConcreteCommand1(receiver),
      command2: Command = new ConcreteCommand2(receiver),
      invoker: Invoker = new Invoker();

    invoker.storeAndExecute(command1);
    invoker.storeAndExecute(command2);
  }
}
