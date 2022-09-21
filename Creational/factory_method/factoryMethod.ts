namespace FactoryMethodPattern {
	export interface AbstractProduct {
		method(): void;
	}

	export class ConcreteProductA implements AbstractProduct {
		method(): void {
			console.log("Method of ConcreteProductA");
		}
	}

	export class ConcreteProductB implements AbstractProduct {
		method(): void {
			console.log("Method of ConcreteProductB");
		}
	}

	export class NullObject implements AbstractProduct {
		method(): void {
			console.log("Method of NullObject");
		}
	}

	export namespace ProductFactory {
		export function createProduct(type: string): AbstractProduct {
			if (type === "A") {
				return new ConcreteProductA();
			} else if (type === "B") {
				return new ConcreteProductB();
			}

			return new NullObject();
		}
	}
}
