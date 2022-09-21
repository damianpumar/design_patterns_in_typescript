namespace ChainOfResponsibilityPattern {
	export class Handler {
		private handler: Handler;

		public setHandler(handler: Handler): void {
			this.handler = handler;
		}

		public operation(): void {
			if (this.handler) {
				this.handler.operation();
			}

			this.handlerRequest();
		}

		protected handlerRequest(): void {
			throw new Error("Abstract method!");
		}
	}

	export class ConcreteHandler1 extends Handler {
		protected handlerRequest() {
			console.log("Message :: (ConcreteHandler1)");
		}
	}

	export class ConcreteHandler2 extends Handler {
		protected handlerRequest() {
			console.log("Message :: (ConcreteHandler2)");
		}
	}

	export class ConcreteHandler3 extends Handler {
		protected handlerRequest() {
			console.log("Message :: (ConcreteHandler3)");
		}
	}
}
