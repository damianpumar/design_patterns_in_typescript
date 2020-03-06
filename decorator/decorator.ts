namespace DecoratorPattern {

    export interface Component {
        operation(): void;
    }

    export class ConcreteComponent implements Component {
        public operation(): void {
            console.log("Run som code from ConcreteComponent (Decorated component)");
        }
    }

    export class Decorator implements Component {
        private component: Component;

        constructor(component: Component) {
            this.component = component;
        }

        public operation(): void {
            console.log("Run some code from Decorator component");

            this.component.operation();
        }
    }

    export class ConcreteDecorator extends Decorator {
        constructor(component: Component) {
            super(component)
        }

        public operation(): void {
            super.operation();
            console.log("Run som code from ConcreteDecorator");
        }
    }
}
