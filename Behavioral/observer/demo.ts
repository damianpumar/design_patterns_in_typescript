/// <reference path="observer.ts" />
namespace ObserverPattern {
	export namespace Demo {
		export function show(): void {
			var sub: ConcreteSubject = new ConcreteSubject();

			sub.register(new ConcreteObserver(sub, "Jancsi"));
			sub.register(new ConcreteObserver(sub, "Julcsa"));
			sub.register(new ConcreteObserver(sub, "Marcsa"));

			sub.SubjectState = 123;
			sub.notify();
		}
	}
}
