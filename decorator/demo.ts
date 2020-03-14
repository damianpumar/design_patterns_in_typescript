/// <reference path="decorator.ts" />
namespace DecoratorPattern {
	export namespace Demo {
		export function show(): void {
			const componentDecorated: Component = new ConcreteComponent();

			const componentDecorator: Component = new ConcreteDecorator(componentDecorated);

			componentDecorator.operation();
		}
	}
}
