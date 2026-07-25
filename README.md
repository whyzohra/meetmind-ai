# MeetMind AI

[![Continuous Integration](https://github.com/whyzohra/meetmind-ai/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/whyzohra/meetmind-ai/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

MeetMind AI is a modern Next.js application for turning meeting transcripts into clear summaries, decisions, action items, and follow-up communication.

## Getting started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Run ESLint checks. |
| `npm run typecheck` | Validate TypeScript without emitting files. |
| `npm run build` | Create a production build. |

## CI/CD

Continuous integration is defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). It runs on every push and pull request targeting `main` and performs the following checks with Node.js 22:

1. Installs lockfile-pinned dependencies using `npm ci`.
2. Runs ESLint.
3. Runs TypeScript type checking.
4. Creates a Next.js production build.

Any failed check fails the workflow, protecting `main` from broken builds. The workflow uses the same production build command expected by Vercel, but it deliberately does not deploy the application.

> The CI badge becomes active once the repository is published at `whyzohra/meetmind-ai`.

## Vercel compatibility

This project follows Vercel's standard Next.js workflow: install dependencies, then run `npm run build`. No deployment-specific GitHub Actions configuration is required.
