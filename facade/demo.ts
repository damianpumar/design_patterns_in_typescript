/// <reference path="facade.ts" />
namespace FacadePattern {
	export namespace Demo {
		export function show(): void {
			var facade: Facade = new Facade();

			facade.operation1();

			facade.operation2();
		}
	}
}
