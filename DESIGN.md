# Design System: BuiltExpert
**Project ID:** Chromapages/builtexpert

## 1. Visual Theme & Atmosphere
The **BuiltExpert** brand utilizes an **Industrial Capital Editorial** aesthetic. It is designed to feel authoritative, precise, and premium, specifically targeting high-revenue trades businesses (HVAC, Electricians, Contractors).

- **Tone:** Technical, Trustworthy, Modern, and Institutional.
- **Density:** Airy with purposeful whitespace, punctuated by dense typographic metadata ("the editorial look").
- **Signature Elements:** Hairline borders, dot-grid mesh textures, and a sharp, non-rounded button style.

## 2. Color Palette & Roles

### Brand Accents
*   **Deep Industrial Teal (#006565):** The primary brand accent. Used for primary actions, eyebrows, and key emphasis.
*   **Teal Container (#008080):** A deeper variant used for secondary containers and hover states.
*   **Secondary Slate (#4a6363):** Used for auxiliary UI elements and supporting accents.

### Typography & Surfaces
*   **Industrial Charcoal (#1a1a1a):** The dominant color for headings, primary text, and high-impact CTA backgrounds.
*   **Muted Steel (#6b7280):** Standard color for body copy and metadata. Ensures readability while maintaining the editorial vibe.
*   **Pure Surface (#fcf9f8):** The default background for the application. A "warm white" that reduces eye strain and feels more premium than pure #ffffff.
*   **Dark Deep Zinc (#0f1010):** Used for high-contrast sections and "dark mode" intersections.

## 3. Typography Rules

BuiltExpert uses a dual-font strategy to balance industrial strength with editorial grace.

- **Headline Font:** **Plus Jakarta Sans**
    - Used for all Display, H1, H2, and H3 elements.
    - Usage: Light weights (300/400) for large headers to achieve a "luxury architectural" feel; Bold (700+) for smaller card headings.
    - Tracking: `tracking-tighter` for large displays; `tracking-tight` for sections.
- **Body Font:** **Manrope**
    - Used for all body copy, UI labels, and navigation.
    - Usage: Regular (400) for readability; Bold (700) for metadata and labels.
- **Eyebrow Scale:** Bold, uppercase, widely tracked (`tracking-[0.3em]`) at small sizes (`10px`). This is the defining typographic marker of the site.

## 4. Component Stylings

*   **Buttons:**
    - **Shape:** Strictly **Sharp Corners** (`rounded-none`). Rounded buttons are prohibited to maintain the industrial look.
    - **Primary:** Charcoal background (`#1a1a1a`) with white text, or Teal (`#006565`) with white text.
    - **Ghost:** Hairline border (`0.5px`) with uppercase text.
*   **Cards/Containers:**
    - **Roundness:** Soft **24px** / `rounded-2xl`. This provides a modern "bento" feel that contrasts with the sharp buttons.
    - **Borders:** "Hairline" precision (`0.5px`) using `#e5e7eb`.
    - **Depth:** Whisper-soft diffused shadows. Flat surfaces preferred, using elevation only for interaction states.
*   **Backgrounds:**
    - **Mesh Texture:** A `24px x 24px` radial gradient dot pattern (`#e5e7eb` on white) applied to page roots to suggest a blueprint or technical drawing.

## 5. Layout Principles

- **Site Container:** Maximum width of **1440px** (`90rem`) with fluid internal gutters (`16px` to `64px`).
- **Vertical Rhythm:** Sections use fluid padding scaling from `py-16` (mobile) to `py-24` (desktop).
- **The "Editorial" Split:** Frequent use of asymmetric 2-column grids (e.g., `5fr_7fr`) to create visual interest and break standard symmetrical patterns.
- **Whitespace:** Generous use of "Capital" margins where content has room to breathe, emphasizing importance through isolation.