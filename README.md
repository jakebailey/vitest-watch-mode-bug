# vitest-watch-mode-bug

1. `pnpm install`
1. `pnpm test`; watch mode will start
1. Edit `index.test.ts` (e.g., replace `expect(t)` with `expect(t+1)`).
1. Watch mode will re-run the test and fail, as expected.
1. Hit `u` to update the baseline, but the progress will show all tests doubled, like:
    ```

    RERUN  update snapshot

    ❯ index.test.ts (10)
    ✓ test 0 503ms
    ✓ test 1 504ms
    ✓ test 2 504ms
    ✓ test 3 504ms
    ✓ test 4 505ms
    ⠦ test 5
    ⠦ test 6
    ⠦ test 7
    ⠦ test 8
    ⠦ test 9
    ❯ index.test.ts (10)
    ✓ test 0 503ms
    ✓ test 1 504ms
    ✓ test 2 504ms
    ✓ test 3 504ms
    ✓ test 4 505ms
    ⠴ test 5
    ⠴ test 6
    ⠴ test 7
    ⠴ test 8
    ⠴ test 9
    ```
    Then at the final screen, doubled again:
    ```

    RERUN  update snapshot

    ✓ index.test.ts (10) 1007ms
    ✓ index.test.ts (10) 1007ms

    Snapshots  60 updated 
    Test Files  1 passed (1)
        Tests  10 passed (10)
    Start at  12:36:47
    Duration  1.01s


    PASS  Waiting for file changes...
        press h to show help, press q to quit
    ```
1. Hit `r`, and the duplication goes away.
