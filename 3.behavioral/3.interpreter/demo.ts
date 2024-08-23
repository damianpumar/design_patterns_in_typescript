import { Pattern } from "../../Pattern";
import {
  Context,
  NonterminalExpression,
  TerminalExpression,
} from "./interpreter";

export class InterpreterDemo implements Pattern {
  show(): void {
    const context: Context = new Context();
    const list = [];
    let i = 0;
    let max;

    list.push(new NonterminalExpression());
    list.push(new NonterminalExpression());
    list.push(new NonterminalExpression());
    list.push(new TerminalExpression());
    list.push(new NonterminalExpression());
    list.push(new NonterminalExpression());
    list.push(new TerminalExpression());
    list.push(new TerminalExpression());

    for (i = 0, max = list.length; i < max; i += 1) {
      list[i].interpret(context);
    }
  }
}
