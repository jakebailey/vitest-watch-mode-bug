import { test } from "vitest";
import { execa } from "execa";

function range(n: number) {
    const x = [];
    for (let i = 0; i < n; i++) {
        x.push(i);
    }
    return x;
}

const tests = range(10);

for (const t of tests) {
    test.concurrent(`test ${t}`, async ({ expect }) => {
        const result = await execa("sh", ["-c", `sleep 500ms; echo ${Math.random()}`]);
        expect(result.stdout).toMatchSnapshot();
        expect(result.stderr).toMatchSnapshot();
        expect(result.exitCode).toMatchSnapshot();
    });
}
