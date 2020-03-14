/// <reference path="visitor.ts" />
namespace VisitorPattern {
	export namespace Demo {
		export function show(): void {
			var objs: Objs = new Objs();

			objs.attach(new ConcreteElement1());
			objs.attach(new ConcreteElement2());

			var v1: ConcreteVisitor1 = new ConcreteVisitor1(),
				v2: ConcreteVisitor2 = new ConcreteVisitor2();

			objs.operate(v1);
			objs.operate(v2);
		}
	}
}
