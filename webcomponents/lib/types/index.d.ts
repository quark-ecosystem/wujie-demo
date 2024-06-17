import { QuarkElement } from "quarkc";
declare class MyComponent extends QuarkElement {
    count: number;
    text: string;
    add: () => void;
    componentDidMount(): void;
    render(): any;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-component": MyComponent;
    }
}
export {};
