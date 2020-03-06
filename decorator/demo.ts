/// <reference path="decorator.ts" />
namespace DecoratorPattern {
	export namespace Demo {

		export function show() : void {
			const componentDecorated: DecoratorPattern.Component = new DecoratorPattern.ConcreteComponent();

			const componentDecorator: DecoratorPattern.Component = new DecoratorPattern.ConcreteDecorator(componentDecorated);

			componentDecorator.operation();
		}
	}
}

