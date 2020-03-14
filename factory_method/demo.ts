/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
	export namespace Demo {
		export function show(): void {
			const a: AbstractProduct = ProductFactory.createProduct("A");
			const b: AbstractProduct = ProductFactory.createProduct("B");
			const c: AbstractProduct = ProductFactory.createProduct("C");

			a.method();
			b.method();
			c.method();
		}
	}
}
