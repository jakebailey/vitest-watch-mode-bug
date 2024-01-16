import { test } from "vitest";
import { execa } from "execa";

const tests = [1, 2, 3, 4];

for (const t of tests) {
  test.concurrent(`test ${t}`, async ({expect}) => {
    const { stdout } = await execa("sh", ["-c", `sleep 1; echo ${t+1}`]);
    expect(stdout).toMatchSnapshot();
  })
}
