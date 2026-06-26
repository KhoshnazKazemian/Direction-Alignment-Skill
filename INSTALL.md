# INSTALL.md

## Direction Alignment Skill

This guide explains how to install and use `direction-alignment-skill`.

---

## 1. Download or Clone the Repository

Clone the repository:

```bash
git clone <your-repository-url>
```

Open the folder:

```bash
cd direction-alignment-skill
```

You should see:

```text
direction-alignment-skill/
├── README.md
├── INSTALL.md
├── LICENSE
├── SKILL.md
└── examples/
    └── first-workflow-activation/
```

---

## 2. Install in Claude Code

From your project root, create a Claude skills folder:

```bash
mkdir -p .claude/skills/direction-alignment-skill
```

Copy the skill file into it:

```bash
cp SKILL.md .claude/skills/direction-alignment-skill/SKILL.md
```

Your project should now include:

```text
your-project/
└── .claude/
    └── skills/
        └── direction-alignment-skill/
            └── SKILL.md
```

---

## 3. Install in Cursor

From your project root, create a Cursor skills folder:

```bash
mkdir -p .cursor/skills/direction-alignment-skill
```

Copy the skill file into it:

```bash
cp SKILL.md .cursor/skills/direction-alignment-skill/SKILL.md
```

Your project should now include:

```text
your-project/
└── .cursor/
    └── skills/
        └── direction-alignment-skill/
            └── SKILL.md
```

---

## 4. Use the Skill

Open your AI coding assistant inside the project where the skill is installed.

Use this prompt:

```text
Use the direction-alignment-skill.

Problem:
[Describe the product problem you want to explore]
```

Example:

```text
Use the direction-alignment-skill.

Problem:
New users struggle to create their first workflow and often leave before reaching activation.
```

---

## 5. Expected First Response

The assistant should either:

1. Ask a few clarifying questions, if the problem is too vague

or

2. Generate three different solution directions, if the problem is clear enough

It should not start building immediately.

---

## 6. Confirm the Directions

After the assistant proposes three directions, review them.

You can respond with:

```text
Yes, these directions work. Build the comparison landing page and prototypes.
```

Or ask for changes:

```text
Replace direction 2 with a simpler option.
```

---

## 7. Run the Prototype

After the assistant builds the files, follow the run command it provides.

Common examples:

```bash
npm install
npm run dev
```

or:

```bash
pnpm install
pnpm dev
```

Open the local URL shown in the terminal.

Example:

```text
http://localhost:5173
```

---

## 8. Update the Skill

To update the skill later, replace the installed `SKILL.md` file with the latest version.

For Claude Code:

```bash
cp SKILL.md .claude/skills/direction-alignment-skill/SKILL.md
```

For Cursor:

```bash
cp SKILL.md .cursor/skills/direction-alignment-skill/SKILL.md
```
