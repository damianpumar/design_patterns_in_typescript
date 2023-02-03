namespace CommandPattern {
	export class Command {
		public execute(): void {
			throw new Error("Abstract method!");
		}
	}

	export class ConcreteCommand1 extends Command {
		private receiver: Receiver;

		constructor(receiver: Receiver) {
			super();
			this.receiver = receiver;
		}

		public execute(): void {
			console.log("`execute` method of ConcreteCommand1 is being called!");
			this.receiver.action();
		}
	}

	export class ConcreteCommand2 extends Command {
		private receiver: Receiver;

		constructor(receiver: Receiver) {
			super();
			this.receiver = receiver;
		}

		public execute(): void {
			console.log("`execute` method of ConcreteCommand2 is being called!");
			this.receiver.action();
		}
	}

	export class Invoker {
		private commands: Command[];

		constructor() {
			this.commands = [];
		}

		public storeAndExecute(cmd: Command) {
			this.commands.push(cmd);
			cmd.execute();
		}
	}

	export class Receiver {
		public action(): void {
			console.log("action is being called!");
		}
	}
}