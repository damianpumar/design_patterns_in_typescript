/// <reference path="memento.ts" />
namespace MementoPattern {
	export namespace Demo {
		export function show(): void {
			const state: State = new State("... State ");

			const originator: Originator = new Originator(state);

			const careTaker: CareTaker = new CareTaker();

			careTaker.Memento = originator.createMemento();
			originator.State = new State("something else...");

			originator.setMemento(careTaker.Memento);
		}
	}
}
