# Accessibility

## Purpose
This document defines the accessibility targets and implementation requirements for the BuiltExpert marketing website.

## Accessibility Target
Target **WCAG 2.2 Level AA**.

## Requirements
- semantic HTML
- keyboard navigation
- visible focus states
- accessible forms
- sufficient color contrast
- meaningful labels and error states
- predictable navigation and interactions

## Keyboard Navigation
- all interactive elements keyboard accessible
- no keyboard traps
- logical tab order
- nav, FAQ, forms, and mobile menu must work without a mouse

## ARIA Notes
Use ARIA only when needed:
- `aria-expanded`
- `aria-controls`
- `aria-current`
- `aria-label`
- `aria-describedby`
- `aria-live`

## Forms Accessibility
- every field has a label
- required fields indicated clearly
- validation messages tied to relevant field
- focus moves to the first invalid field or error summary
- success confirmation is clearly presented

## Recommendation
If a feature cannot be used without a mouse or becomes confusing at zoom, it is not ready.
