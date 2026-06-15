# code-review-demo  —  ⚠️ RETIRED TEST REPO (not in use)

> **This repository is no longer used.** It was only ever a throwaway test/demo
> repo for trying out the Centrox automated code review pipeline. It is **not a
> product, not a client project, and is not maintained.** Safe to ignore.
>
> Kept around for reference only. Do not build on it or wire anything to it.

---

## What it was for

A small sample repo wired to the Centrox automated code review pipeline. The
`main` branch had a simple TypeScript utility file; demo branches added code with
intentional violations so the bot had something to comment on.

Review used to run on every pull request against `main`. The workflow lived at
`.github/workflows/code-review.yml`.
