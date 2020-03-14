/// <reference path="adapter.ts" />
namespace AdapterPattern {
	export namespace Demo {
		export function show(): void {
			var adapter: Adapter = new Adapter();
			adapter.call();
		}
	}
}
