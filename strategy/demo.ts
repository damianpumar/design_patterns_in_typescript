/// <reference path="strategy.ts" />
namespace StrategyPattern {
	export namespace Demo {

		export function show() : void {
			const strategies: StrategyPattern.Strategy[] = [];

			strategies.push(new StrategyPattern.ConcreteStrategy1());
			strategies.push(new StrategyPattern.ConcreteStrategy2());
			strategies.push(new StrategyPattern.ConcreteStrategy3());

			strategies.forEach(strategy => {
				strategy.execute();
			});
		}
	}
}
