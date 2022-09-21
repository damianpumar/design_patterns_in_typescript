/// <reference path="abstractFactory.ts" />

namespace AbstractFactoryPattern {
	export namespace Demo {
		export function show() {
			var factory1: AbstractFactory = new ConcreteFactory1();
			var tester1: Tester = new Tester(factory1);

			tester1.test();

			var factory2: AbstractFactory = new ConcreteFactory2();
			var tester2: Tester = new Tester(factory2);
			tester2.test();
		}
	}
}
