```markdown
# Design System Strategy: The Authority Layer

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Blueprint"**
This design system moves away from the whimsical, "bubbly" aesthetics of consumer SaaS. Instead, it adopts the precision and structural integrity of a high-end architectural firm. For Chromapages, the goal is to signal *industrial-grade growth*. We are not a "creative agency" selling art; we are a growth operator selling engineered systems.

To break the "template" look, we utilize **Intentional Asymmetry**. This means balancing heavy, authoritative typography on the left with breathable, airy whitespace on the right. We leverage "The Overlap"—where high-fidelity mockups of contractor dashboards break the container boundaries—to create a sense of three-dimensional depth and forward motion.

## 2. Colors & Surface Philosophy
The palette is rooted in "Authority Neutrals." We use deep charcols and near-blacks to signify stability, while the electric teal acts as the "current" running through the system.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections or cards. High-end design is felt through tonal shifts, not outlines. 
- Use a background of `surface` (#fcf9f8) for the main page.
- Transition to `surface-container-low` (#f6f3f2) for a full-bleed section break.
- Boundaries are created by the juxtaposition of these shades, creating a clean, editorial flow that feels "carved" rather than "boxed."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
- **Base Level:** `surface` (The foundation).
- **Secondary Level:** `surface-container` (For grouping related content).
- **Elevated Level:** `surface-container-highest` (For the most critical interactive cards).
*Note: Each nested element should be at least one tier higher or lower than its parent to maintain visible distinction without lines.*

### The Glass & Gradient Rule
To add "soul" to the mechanical grid, use `surface-tint` gradients for primary actions. A subtle linear transition from `primary` (#006565) to `primary-container` (#008080) prevents the UI from looking flat and "cheap." For floating navigation bars, apply a `backdrop-blur` (20px+) with a semi-transparent `surface-container-lowest` (#ffffff at 80% opacity) to achieve a premium frosted glass effect.

## 3. Typography: Precision & Power
The interplay between **Plus Jakarta Sans** (our high-performance Display face) and **Manrope** (our technical Body face) creates a "Technical Editorial" vibe.

*   **Display & Headlines (Plus Jakarta Sans):** These are the "Lead Magnets." Use `display-lg` for value propositions. The tight kerning and geometric structure command authority.
*   **Body & Labels (Manrope):** Chosen for its legibility in data-heavy contexts (SEO dashboards, lead lists). It feels modern, clean, and unobtrusive.
*   **Hierarchy as Brand:** Use high contrast in scale. A `display-lg` headline should be paired with a `body-md` subheader. This "Big-Small" relationship mimics the layout of high-end business journals like *The Economist* or *Monocle*.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on top of a `surface-container-low` background. This creates a "soft lift" that feels natural and premium.
*   **Ambient Shadows:** If a card must float (e.g., a lead capture modal), use a shadow color of `on-surface` (#1c1b1b) at **4% opacity** with a blur of **40px**. It should look like a soft glow, not a hard drop-shadow.
*   **The Ghost Border Fallback:** If accessibility requires a border (e.g., in a high-glare environment), use `outline-variant` (#bdc9c8) at **15% opacity**. Never use a 100% opaque border.

## 5. Components

### Buttons (The "Actuators")
*   **Primary:** `primary` (#006565) background with `on-primary` (#ffffff) text. Use `xl` (12px) rounded corners. Apply a subtle inner-shadow (top-down) for a tactile, "pressed-in" feel.
*   **Secondary:** No background. Use a `Ghost Border` and `primary` text.
*   **Interaction:** On hover, shift the background to `primary-container`. No "bounce" animations—use a smooth 200ms ease-in-out transition.

### Cards (The "Modules")
*   **Structure:** No dividers. Use `Spacing 8` (2.75rem) to separate internal card elements.
*   **Imagery:** Mockups should be placed within cards using `md` (8px) corner radius. Use a `surface-variant` background for image containers to provide a "frame" within the card.

### Input Fields (The "Lead Capture")
*   **Style:** `surface-container-lowest` background. 
*   **State:** On focus, the border should not change color; instead, the `surface-tint` should increase in intensity, and a subtle 2px glow of `primary` at 20% opacity should appear.

### Specialized Component: The "Growth Dashboard" Widget
*   For the target audience (Electricians/HVAC), create small "Pulse" widgets. Use `tertiary` (#495b6f) for data labels and `primary` for growth metrics. These should be styled with a "Glassmorphism" effect when overlaying images.

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme vertical whitespace (`Spacing 20` and `24`) between sections to signal premium positioning.
*   **Do** align all elements to a strict 12-column grid, then intentionally break it with one "Hero" image or mockup.
*   **Do** use `on-surface-variant` (#3e4949) for secondary text to maintain a sophisticated low-contrast look.

### Don’t
*   **Don’t** use "playful" icons. Use thin-stroke, technical, or industrial icons.
*   **Don’t** use pure black (#000000). Always use `on-primary-fixed` or `inverse-surface` for deep tones to keep them "living" and rich.
*   **Don’t** use dividers or lines. If you feel the need for a line, increase the whitespace or change the background tone instead.