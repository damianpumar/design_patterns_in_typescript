import { Table } from "console-table-printer";
import readline from "readline";
import {
  AbstractFactoryDemo,
  BuilderDemo,
  FactoryDemo,
  PrototypeDemo,
  SingletonDemo,
} from "./1.creational";
import {
  AdapterDemo,
  BridgeDemo,
  CompositeDemo,
  DecoratorDemo,
  FacadeDemo,
  FlyweightDemo,
  ProxyDemo,
} from "./2.structural";
import {
  ChainOfResponsibilityDemo,
  CommandDemo,
  InterpreterDemo,
  IteratorDemo,
  MediatorDemo,
  MementoDemo,
  ObserverDemo,
  StateDemo,
  StrategyDemo,
  TemplateMethodDemo,
  VisitorDemo,
} from "./3.behavioral";
import { Pattern } from "./Pattern";
import { spawn } from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const patterns: { [key: number]: new () => Pattern } = {
  1: SingletonDemo,
  2: AbstractFactoryDemo,
  3: FactoryDemo,
  4: BuilderDemo,
  5: PrototypeDemo,
  6: AdapterDemo,
  7: BridgeDemo,
  8: CompositeDemo,
  9: DecoratorDemo,
  10: FacadeDemo,
  11: FlyweightDemo,
  12: ProxyDemo,
  13: ChainOfResponsibilityDemo,
  14: CommandDemo,
  15: InterpreterDemo,
  16: IteratorDemo,
  17: MediatorDemo,
  18: MementoDemo,
  19: ObserverDemo,
  20: StateDemo,
  21: StrategyDemo,
  22: TemplateMethodDemo,
  23: VisitorDemo,
};

const printMenu = (): void => {
  const p = new Table({
    title: "Choose one pattern to demonstrate",
    columns: [
      { name: "Creational", alignment: "left" },
      { name: "Structural", alignment: "left" },
      { name: "Behavioral", alignment: "left" },
    ],
    rows: [
      {
        Creational: "1: Singleton",
        Structural: "6: Adapter",
        Behavioral: "13: Chain of responsibility",
      },
      {
        Creational: "2: Abstract factory",
        Structural: "7: Bridge",
        Behavioral: "14: Command",
      },
      {
        Creational: "3: Factory method",
        Structural: "8: Composite",
        Behavioral: "15: Interpreter",
      },
      {
        Creational: "4: Builder",
        Structural: "9: Decorator",
        Behavioral: "16: Iterator",
      },
      {
        Creational: "5: Prototype",
        Structural: "10: Facade",
        Behavioral: "17: Mediator",
      },
      {
        Creational: "",
        Structural: "11: Flyweight",
        Behavioral: "18: Memento",
      },
      {
        Creational: "",
        Structural: "12: Proxy",
        Behavioral: "19: Observer",
      },
      {
        Creational: "",
        Structural: "",
        Behavioral: "20: State",
      },
      {
        Creational: "",
        Structural: "",
        Behavioral: "21: Strategy",
      },
      {
        Creational: "",
        Structural: "",
        Behavioral: "22: Template method",
      },
      {
        Creational: "",
        Structural: "",
        Behavioral: "23: Visitor",
      },
    ],
  });

  p.printTable();
};

const whichPatternWouldYouLike = () => {
  rl.question("Which pattern would you like to check?   ", (answer: string) => {
    const pattern = patterns[+answer];

    if (!pattern) {
      console.log("This pattern number does not exist");

      return rl.close();
    }

    const instance = new pattern();

    instance.show();

    doYouWantContinue();
  });
};

const doYouWantContinue = () => {
  rl.question(
    "Do you want to check another pattern? (y/n)   ",
    (answer: string) => {
      if (answer.toLowerCase() === "y") {
        return start();
      }

      rl.question(
        "Would you like to start this repo? (y/n)   ",
        (answer: string) => {
          if (answer.toLowerCase() === "y") {
            console.log("Thanks!👍");

            setTimeout(() => {
              spawn("open", [
                "https://github.com/damianpumar/design_patterns_in_typescript",
              ]);
            }, 1000);
          } else {
            console.log("ok 👍");
          }

          console.log("Bye! 👋");

          return rl.close();
        },
      );
    },
  );
};

const start = (): void => {
  console.clear();

  printMenu();

  whichPatternWouldYouLike();
};

start();
