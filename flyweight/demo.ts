/// <reference path="flyweight.ts" />
namespace FlyweightPattern {
	export namespace Demo {
		export function show(): void {
			const factory: FlyweightFactory = new FlyweightFactory();

			const conc1: ConcreteFlyweight = <ConcreteFlyweight>factory.getFlyweight("conc1");

			const conc2: ConcreteFlyweight = <ConcreteFlyweight>factory.getFlyweight("conc2");

			conc1.operation("1");
			conc2.operation("2");
		}
	}
}
