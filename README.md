# MeetMind AI

[![Continuous Integration](https://github.com/whyzohra/meetmind-ai/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/whyzohra/meetmind-ai/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-ready-black?logo=vercel)](https://vercel.com/new)

MeetMind AI is a polished, AI-ready meeting intelligence interface. It turns raw meeting transcripts into clear summaries, decisions, assigned action items, risks, and a professional follow-up email—helping teams retain context and move work forward.

> The current summarization flow uses realistic mocked results. The UI and client-side interaction model are prepared for a future AI or backend integration.

## The business problem

Teams spend significant time taking notes, chasing decisions, and translating meeting conversations into work. Important owners and deadlines can disappear across calls, chats, and documents. MeetMind AI provides a focused workspace where a transcript becomes a structured, easy-to-scan record of what happened and what needs to happen next.

## Features

- Responsive SaaS-style landing page and application workspace.
- Transcript editor with a 10,000-character limit and live character count.
- Realistic sample transcript for instant product exploration.
- Disabled, clear, and load-example input states.
- Two-second mocked analysis flow with progress feedback and loading skeletons.
- Structured results for executive summary, key decisions, action items, risks, and follow-up email.
- Responsive results layout that stacks cleanly on mobile.
- Accessible UI primitives, Lucide icons, and subtle interface animations.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15 with the App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI foundation | shadcn/ui patterns, Radix Slot, CVA |
| Icons | Lucide React |
| Quality | ESLint, TypeScript, GitHub Actions |
| Deployment target | Vercel |

## Project structure

```text
app/                     App Router routes, layout, and global styles
components/layout/       Shared site shell, navigation, and footer
components/marketing/    Landing-page sections
components/meeting/      Transcript and meeting-results experience
components/ui/           Reusable UI primitives
lib/                     Shared utilities
.github/workflows/       Continuous integration workflow
```

## Installation

### Prerequisites

- Node.js 22 or newer (the supported range is defined in `package.json`)
- npm 10 or newer

Clone the repository and install the lockfile-pinned dependencies:

```bash
git clone https://github.com/whyzohra/meetmind-ai.git
cd meetmind-ai
npm ci
```

## Local development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page reloads automatically as you edit the application.

## Quality commands

| Command | Purpose |
| --- | --- |
| `npm install` | Resolve dependencies and refresh the lockfile when dependencies change. |
| `npm ci` | Perform a reproducible clean install. |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint checks. |
| `npm run typecheck` | Validate TypeScript without emitting files. |
| `npm run build` | Create the optimized production build. |

## GitHub Actions CI pipeline

The workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every push and pull request targeting `main`. It uses Node.js 22, caches npm dependencies, and runs these checks in order:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`

Any failed check fails the workflow, keeping the main branch deployable. CI is intentionally deployment-free; Vercel handles deployments from GitHub.

## Deploying to Vercel

MeetMind AI requires no custom Vercel configuration. It uses Vercel's standard Next.js detection and build workflow.

1. Sign in to [Vercel](https://vercel.com/) with GitHub.
2. Select **Add New → Project** and import `whyzohra/meetmind-ai`.
3. Keep the detected framework preset as **Next.js**.
4. Confirm the build command is `npm run build` and the output directory is left empty.
5. Deploy.

Vercel will use the Node.js 22-or-newer range in `package.json`, install from `package-lock.json`, and create preview deployments for future pull requests. No environment variables are required for the mocked version of the application.

## Live Demo

**Application:** https://meetmind-ai-black.vercel.app/

**Source Code:** https://github.com/whyzohra/meetmind-ai

## Future improvements

- Connect a secure AI summarization API and persist meeting data.
- Add authentication, workspaces, and role-based collaboration.
- Support audio upload, transcription, and speaker identification.
- Export summaries to email, Slack, Notion, and project-management tools.
- Add searchable meeting history, analytics, and usage monitoring.
