/// <reference path="iterator.ts" />
namespace IteratorPattern {
	export namespace Demo {
		export function show(): void {
			const nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65];

			const numbers: Numbers = new Numbers(nArray);

			const it: ConcreteIterator = <ConcreteIterator>numbers.createIterator();

			while (it.hasNext()) {
				console.log(it.next());
			}
		}
	}
}
