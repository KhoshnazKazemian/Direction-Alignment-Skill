# Direction Alignment — First Workflow Activation

**Confirmed:** 2026-05-31  
**Problem:** New users at Relay struggle to create their first workflow and leave before reaching activation. Most drop off during setup because they don't know where to start or how to structure their automation.  
**Discovery question:** Should we help new users begin through natural-language generation, proven templates, or guided building with an assistant?  
**Landing page:** `/` (local: `http://localhost:5173`)

---

## Direction 01 — Describe It, Relay Builds It

**Value proposition:** Tell Relay your goal in plain language and get a working workflow in seconds.

**Pros**

- Fastest path to a first workflow
- Lowest cognitive load for new users
- Strong time-to-value story for activation metrics

**Cons**

- Users may not understand what was built
- Harder to trust or edit generated logic
- Less learning about how Relay works

**Core assumption:** New users know their outcome but not how to translate it into workflow steps.  
**First thing to test:** Do users who start with a prompt reach activation faster than those who don't?  
**Defining interaction:** A prominent prompt box where the user describes their automation goal and Relay generates the workflow.  
**Product scene:** Relay workspace with sidebar navigation, empty workflow area, and a dominant prompt input as the primary action — minimal builder chrome visible upfront.  
**Card preview concept:** Large prompt field centered in the workspace with placeholder like "When a new lead fills out our form, notify sales and add them to CRM…"  
**Prototype experience:** User types a goal, triggers generation, sees steps appear as a completed workflow they can review.

---

## Direction 02 — Start From Proven Templates

**Value proposition:** Pick a template that matches your use case and customize it in minutes.

**Pros**

- Reduces blank-page anxiety
- Sets quality baseline with proven patterns
- Faster than building from scratch without giving up all control

**Cons**

- Templates may not fit edge cases
- Users might pick wrong template and get stuck
- Less differentiation from competitors with template libraries

**Core assumption:** New users lack confidence to design a workflow but can recognize their scenario in a gallery.  
**First thing to test:** Do template starters improve completion rate vs. empty canvas?  
**Defining interaction:** Browse and select from a template gallery, then customize key fields before publishing.  
**Product scene:** Relay workspace showing a grid of industry templates with previews, filters, and a customization panel after selection.  
**Card preview concept:** Template gallery with cards like "Lead routing", "Invoice approval", "Customer onboarding" — search and category filters visible.  
**Prototype experience:** User browses templates, selects one, adjusts a few settings, and sees the workflow populate.

---

## Direction 03 — Build With an Assistant

**Value proposition:** Construct your workflow step by step while Relay suggests what to add next.

**Pros**

- Users learn the product while building
- Maintains full control over structure
- AI adds value without replacing the builder

**Cons**

- Slowest path to first workflow
- Higher setup burden for impatient users
- Assistant quality must feel helpful, not noisy

**Core assumption:** New users want to understand Relay's model and will accept slower setup if they stay in control.  
**First thing to test:** Do assistant suggestions reduce drop-off during manual building?  
**Defining interaction:** Traditional workflow canvas with an AI assistant panel offering contextual next-step suggestions.  
**Product scene:** Split layout — workflow builder on the left, assistant panel on the right with suggested actions based on current steps.  
**Card preview concept:** Builder canvas with 2–3 steps already placed and assistant panel showing "Suggested next: Send Slack notification to #sales"  
**Prototype experience:** User adds steps manually, accepts or dismisses assistant suggestions, and completes a workflow organically.
