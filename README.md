# code-review-demo

A small sample repo wired to the Centrox automated code review pipeline. The `main` branch has a simple TypeScript utility file; demo branches add code with intentional violations so the bot has something to comment on.

Review runs on every pull request against `main`. The workflow lives at `.github/workflows/code-review.yml`.
