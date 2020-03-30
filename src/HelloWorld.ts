export default class HelloWorld {
    public sayHello(name: string) {
        return `Hello ${name}!`;
    }
}

const map = new Map<string, NodeJS.Timer>();

map.set("1", setTimeout(() => 500));

export {}