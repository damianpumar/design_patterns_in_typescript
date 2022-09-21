/// <reference path="state.ts" />
namespace StatePattern {
	export namespace Demo {
		export function show(): void {
			const context: Context = new Context(new ConcreteStateA());

			context.request();
			context.request();
			context.request();
			context.request();
			context.request();
			context.request();
			context.request();
			context.request();
		}
	}
}
