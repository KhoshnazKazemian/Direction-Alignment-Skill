# Example — First Workflow Activation

A reference output of the [Direction Alignment Skill](../../SKILL.md).

This example shows how the skill can turn one product problem into several distinct solution directions, then make those directions visual and explorable enough for team alignment.

It is not meant to be a detailed product spec. The point is to help a team compare options, understand the trade-offs, and discuss which direction is worth pursuing.

**Fictional product:** Relay — workflow automation for ops teams.

## Problem

New users at Relay struggle to create their first workflow and leave before reaching activation.

## Three directions

| # | Direction | Bet |
|---|-----------|-----|
| 01 | Describe It, Relay Builds It | Prompt-first — AI generates the workflow |
| 02 | Start From Proven Templates | Template gallery — customize a proven pattern |
| 03 | Build With an Assistant | Manual builder — AI suggests next steps |

Supporting direction notes: [directions.md](./directions.md)

## Live demo

[Open the deployed example](https://khoshnazkazemian.github.io/Direction-Alignment-Skill/)

## Run locally

From the repository root:

```bash
cd examples/first-workflow-activation/app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

From the repository root:

```bash
cd examples/first-workflow-activation/app
npm run build
npm run preview
```

## What to notice

This example demonstrates the kind of alignment artifact the skill is designed to produce:

- **One shared problem** — all directions respond to the same activation challenge
- **Three different product bets** — each direction explores a different way to help users start
- **Visual comparison** — the landing page makes the options easy to scan side by side
- **Lightweight prototypes** — each direction can be experienced end to end without becoming a full product build
- **Team discussion support** — the output gives stakeholders something concrete to react to, compare, and choose from
- **Supporting notes** — `directions.md` captures the rationale and trade-offs behind the prototypes

## Deploy

The repo includes a GitHub Actions workflow that builds this app and publishes to GitHub Pages on push to `main`.

If you fork or reuse this example, enable Pages under **Settings → Pages → Source: GitHub Actions**.
