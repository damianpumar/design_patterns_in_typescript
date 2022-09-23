/// <reference path="mediator.ts" />
namespace MediatorPattern {
	export namespace Demo {
		export function show(): void {
			var cm: ConcreteMediator = new ConcreteMediator(),
				B: ConcreteColleagueA = new ConcreteColleagueA(cm),
				A: ConcreteColleagueB = new ConcreteColleagueB(cm);

			cm.concreteColleagueA = B;
			cm.concreteColleagueB = A;

			B.send("`send` of ConcreteColleagueA is being called!");
			A.send("`send` of ConcreteColleagueB is being called!");
		}
	}
}
