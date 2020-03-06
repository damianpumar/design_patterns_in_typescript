namespace CompositePattern {
    export interface Component {
        operation(): void;
    }

    export class Composite implements Component {

        private list: Component[];
        private name: String;

        constructor(name: String) {
            this.list = [];
            this.name = name;
        }

        public operation(): void {
            console.log("`operation of `", this.name)
            this.list.forEach(component => {
                component.operation();
            });
        }

        public add(component: Component): void {
            this.list.push(component);
        }
    }

    export class Leaf implements Component {
        private name: String;
        constructor(name: String) {
            this.name = name;
        }
        public operation(): void {
            console.log("`operation` of Leaf", this.name, " is called.");
        }
    }
}

