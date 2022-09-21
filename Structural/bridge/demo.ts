/// <reference path="bridge.ts" />
namespace BridgePattern {
	export namespace Demo {
		export function show(): void {
			var abstractionA: Abstraction = new RefinedAbstractionA(new ConcreteImplementorA());
			var abstractionB: Abstraction = new RefinedAbstractionB(new ConcreteImplementorB());

			abstractionA.callIt("abstractionA");
			abstractionB.callIt("abstractionB");
		}
	}
}
