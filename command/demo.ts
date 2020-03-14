/// <reference path="command.ts" />
namespace CommandPattern {
	export namespace Demo {
		export function show(): void {
			var receiver: Receiver = new Receiver(),
				command1: Command = new ConcreteCommand1(receiver),
				command2: Command = new ConcreteCommand2(receiver),
				invoker: Invoker = new Invoker();

			invoker.storeAndExecute(command1);
			invoker.storeAndExecute(command2);
		}
	}
}
