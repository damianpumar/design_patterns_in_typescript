/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
	export namespace Demo {
		export function show() : void {
		    const a: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("A");
			const b: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("B");
			const c: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("C");

			a.method();
			b.method();
			c.method();
		};
	}
}

