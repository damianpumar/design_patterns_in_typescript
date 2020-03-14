namespace TemplateMethodPattern {
	export class AbstractClass {
		protected method1(): void {
			console.log("method1 of AbstractClass");
		}

		protected method2(): void {
			console.log("method2 of AbstractClass");
		}

		protected method3(): void {
			console.log("method3 of AbstractClass");
		}

		public templateMethod(): void {
			console.log("templateMethod is being called");
			this.method1();
			this.method2();
			this.method3();
		}
	}

	export class ConcreteClass1 extends AbstractClass {
		protected method1(): void {
			console.log("method1 of ConcreteClass1");
		}

		protected method2(): void {
			console.log("method2 of ConcreteClass1");
		}

		protected method3(): void {
			console.log("method3 of ConcreteClass1");
		}
	}

	export class ConcreteClass2 extends AbstractClass {
		protected method1(): void {
			super.method1();
			console.log("method1 of ConcreteClass2");
		}

		protected method2(): void {
			console.log("method2 of ConcreteClass2");
		}

		protected method3(): void {
			console.log("method3 of ConcreteClass2");
		}
	}
}
