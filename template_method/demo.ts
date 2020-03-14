/// <reference path="templateMethod.ts" />
namespace TemplateMethodPattern {
	export namespace Demo {
		export function show(): void {
			var c1: ConcreteClass1 = new ConcreteClass1(),
				c2: ConcreteClass2 = new ConcreteClass2();

			c1.templateMethod();
			c2.templateMethod();
		}
	}
}
