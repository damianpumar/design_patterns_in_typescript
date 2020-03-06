/// <reference path="chainOfResponsibility.ts" />
namespace ChainOfResponsibilityPattern {
	export namespace Demo {

		export function show() : void {
		    var h1: ChainOfResponsibilityPattern.Handler,
				h2: ChainOfResponsibilityPattern.Handler,
				h3: ChainOfResponsibilityPattern.Handler;

			h1 = new ChainOfResponsibilityPattern.ConcreteHandler1();
			h2 = new ChainOfResponsibilityPattern.ConcreteHandler2();
			h3 = new ChainOfResponsibilityPattern.ConcreteHandler3();

			h1.setHandler(h2);
			h2.setHandler(h3);

			h1.operation();
		}
	}
}

