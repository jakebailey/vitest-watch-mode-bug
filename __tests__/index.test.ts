import { test } from "vitest";

function range(n: number) {
    const x: number[] = [];
    for (let i = 0; i < n; i++) {
        x.push(i);
    }
    return x;
}

const tests = range(10);

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

for (const t of tests) {
    test.concurrent(`test ${t}`, async ({ expect }) => {
        await sleep(500);
        expect(t).toMatchSnapshot();
        expect(t).toMatchSnapshot();
        expect(t).toMatchSnapshot();
    });
}
