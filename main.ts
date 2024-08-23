import { SingletonDemo } from "./1.creational/1.singleton/demo";
import { AbstractFactoryDemo } from "./1.creational/abstract_factory/demo";
import { BuilderDemo } from "./1.creational/builder/demo";
import { FactoryDemo } from "./1.creational/factory_method/demo";
import { PrototypeDemo } from "./1.creational/prototype/demo";
import { AdapterDemo } from "./2.structural/adapter/demo";
import { BridgeDemo } from "./2.structural/bridge/demo";
import { CompositeDemo } from "./2.structural/composite/demo";
import { DecoratorDemo } from "./2.structural/decorator/demo";
import { FacadeDemo } from "./2.structural/facade/demo";
import { FlyweightDemo } from "./2.structural/flyweight/demo";
import { ProxyDemo } from "./2.structural/proxy/demo";
import { ChainOfResponsibilityDemo } from "./3.behavioral/chain_of_responsibility/demo";
import { CommandDemo } from "./3.behavioral/command/demo";
import { InterpreterDemo } from "./3.behavioral/interpreter/demo";
import { IteratorDemo } from "./3.behavioral/iterator/demo";
import { MediatorDemo } from "./3.behavioral/mediator/demo";
import { MementoDemo } from "./3.behavioral/memento/demo";
import { ObserverDemo } from "./3.behavioral/observer/demo";
import { StateDemo } from "./3.behavioral/state/demo";
import { StrategyDemo } from "./3.behavioral/strategy/demo";
import { TemplateMethodDemo } from "./3.behavioral/template_method/demo";
import { VisitorDemo } from "./3.behavioral/visitor/demo";
import { Pattern } from "./Pattern";

declare var require: (moduleId: string) => any;
declare var process: any;

var readline = require("readline");

const menu = (): void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  printMenu();

  rl.question(
    "Which pattern would you like to check?   ",
    function (answer: string) {
      switch (+answer) {
        case 1:
          show(SingletonDemo);
          break;
        case 2:
          show(AbstractFactoryDemo);
          break;
        case 3:
          show(FactoryDemo);
          break;
        case 4:
          show(BuilderDemo);
          break;
        case 5:
          show(PrototypeDemo);
          break;
        case 6:
          show(AdapterDemo);
          break;
        case 7:
          show(BridgeDemo);
          break;
        case 8:
          show(CompositeDemo);
          break;
        case 9:
          show(DecoratorDemo);
          break;
        case 10:
          show(FacadeDemo);
          break;
        case 11:
          show(FlyweightDemo);
          break;
        case 12:
          show(ProxyDemo);
          break;
        case 13:
          show(ChainOfResponsibilityDemo);
          break;
        case 14:
          show(CommandDemo);
          break;
        case 15:
          show(InterpreterDemo);
          break;
        case 16:
          show(IteratorDemo);
          break;
        case 17:
          show(MediatorDemo);
          break;
        case 18:
          show(MementoDemo);
          break;
        case 19:
          show(ObserverDemo);
          break;
        case 20:
          show(StateDemo);
          break;
        case 21:
          show(StrategyDemo);
          break;
        case 22:
          show(TemplateMethodDemo);
          break;
        case 23:
          show(VisitorDemo);
          break;
        default:
          break;
      }
      rl.close();
    }
  );
};

const printMenu = (): void => {
  const menu =
    "= Creational Patterns == \n" +
    "  1: Singleton \n" +
    "  2: Abstract factory \n" +
    "  3: Factory method \n" +
    "  4: Builder \n" +
    "  5: Prototype \n\n" +
    "= Structural Patterns == \n" +
    "  6: Adapter \n" +
    "  7: Bridge \n" +
    "  8: Composite \n" +
    "  9: Decorator \n" +
    " 10: Facade \n" +
    " 11: Flyweight \n" +
    " 12: Proxy \n\n" +
    "= Behavioral Patterns == \n" +
    " 13: Chain of responsibility \n" +
    " 14: Command \n" +
    " 15: Interpreter \n" +
    " 16: Iterator \n" +
    " 17: Mediator \n" +
    " 18: Memento \n" +
    " 19: Observer \n" +
    " 20: State \n" +
    " 21: Strategy \n" +
    " 22: Template method \n" +
    " 23: Visitor \n";

  console.log("\n\n");
  console.log("==== Choose one pattern to demonstrate ====");
  console.log("\n");
  console.log(menu);
};

const show = (patternCtor: new () => Pattern): void => {
  const pattern = new patternCtor();

  pattern.show();
};

menu();
