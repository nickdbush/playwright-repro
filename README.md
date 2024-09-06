# Steps to reproduce

1. Run

```bash
npx playwright test
```

2. Raises import error

```bash
Error: Cannot find package '~' imported from /Users/nick/Documents/Code/playwright-repro/tests/index.spec.ts
```

# Notes

This error only occurs when importing a file like `~/package/index.ts` as `~/package`.
