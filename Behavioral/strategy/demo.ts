/// <reference path="strategy.ts" />
namespace StrategyPattern {
	export namespace Demo {
		export function show(): void {
			const strategies: Strategy[] = [];

			strategies.push(new ConcreteStrategy1());
			strategies.push(new ConcreteStrategy2());
			strategies.push(new ConcreteStrategy3());

			strategies.forEach(strategy => {
				strategy.execute();
			});
		}
	}
}
