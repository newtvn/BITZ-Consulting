# BITZ-ITC UI Revamp Design Spec

## Summary

Visual redesign of the BITZ-ITC website. No content or information changes — only display, layout, and styling updates. The goal is a Modern & Clean aesthetic (Stripe/Linear) while preserving the navy brand identity.

## Approach

Component-First Refactor (Approach A): Strip dark mode first, then update styles page-by-page in place, reusing existing component structure.

## Design Decisions

### Aesthetic Direction
- **Modern & Clean** — more whitespace, refined typography, subtle gradients, professional feel
- **Navy (#000435) stays** as the primary brand color
- **Light mode only** — remove dark mode entirely

### Global Design System Changes

#### Theme Infrastructure Removal
- Remove `next-themes` dependency
- Remove `ThemeProvider` wrapper from `app/layout.tsx`
- Remove `app/providers/theme-provider.tsx`
- Remove `components/theme-provider.tsx`
- Remove `components/ui/theme-toggle-switch.tsx`
- Remove all `dark:*` Tailwind classes across every file
- Remove `.dark` CSS variables block from `globals.css`
- Remove `darkMode: ["class"]` from `tailwind.config.ts`
- Remove `useTheme` imports and usage from `components/header.tsx`

#### Border Radius
- Default `--radius`: `0.75rem` (12px) → `0.5rem` (8px)
- Cards: `rounded-xl` (12px) instead of `rounded-3xl` (24px)
- Buttons: `rounded-full` for pill CTAs only; `rounded-lg` (8px) for form buttons
- Inputs: `rounded-lg` (8px) instead of `rounded-full`
- Images/hero visuals: `rounded-xl` (12px)
- Small icon containers: `rounded-lg` (8px) instead of `rounded-full` (except numbered step circles and small avatar-like elements which keep `rounded-full`)

#### Spacing
- Section padding: `py-12` → `py-16`, `py-24` → `py-28`
- Keep existing container max-widths and horizontal padding

#### Shadows
- Keep `shadow-ios` and `shadow-ios-lg` — already clean
- Remove dark-mode-specific neomorphic shadows from CSS

#### Typography
- Keep Inter font, no changes to font sizes or weights

---

### Header (Navbar)

**Structure:**
- Sticky top, `bg-white` with subtle `border-b`
- **Left:** Logo image (`/Bitz logo.png`) + "BITZ-itc" text
- **Center:** Pill container — `bg-gray-100 rounded-full p-1` containing nav links
  - Active link: white background + subtle shadow (`bg-white shadow-sm`) — "white elevated" style
  - Inactive links: transparent, `text-gray-500`, hover `text-gray-900`
  - Links: Home, Our Vision, Services, Projects, Team
- **Right:** "Contact Us" — navy pill button (`bg-navy text-white rounded-full`)
- **Mobile:** Hamburger opens dropdown with stacked links, same active state styling (no pill container on mobile)

**Removed:**
- `ThemeToggleSwitch` component
- All `dark:*` classes
- `useTheme` hook

---

### Footer

- Keep navy background (`bg-navy text-white`)
- Remove `dark:bg-dark-gradient`
- Use actual Bitz logo image instead of the "B" box + text recreation
- Keep 4-column grid layout (Brand, Services, Company, Connect)
- No structural changes

---

### Homepage

**Trimmed from 7 to 5 sections. Flow: Hero → Services → Projects → Client Success → Contact**

#### Section 1: Hero
- Navy full-width background
- Keep "About Us" heading and company description text as-is
- Carousel icon boxes: `rounded-xl` instead of `rounded-3xl`
- Remove `dark:bg-dark-gradient`

#### Section 2: Services (3 cards)
- `bg-white` section
- Cards: `rounded-xl`, keep `shadow-ios` hover `shadow-ios-lg`
- Icon containers: `rounded-lg` instead of `rounded-full`
- Remove all `dark:*` classes

#### Section 3: Projects (2 case study cards)
- `bg-white` section
- Cards: `rounded-xl`
- "View All Projects" button stays `rounded-full` pill
- Remove all `dark:*` classes

#### Section 4: Client Success (Stats + Testimonial)
- Keep navy background for visual rhythm
- Stats boxes: `rounded-xl` instead of `rounded-3xl`
- Testimonial card: `rounded-xl`
- Avatar circle keeps `rounded-full`

#### Section 5: Contact
- `bg-gray-50` section
- Form card: `rounded-xl`
- Inputs: `rounded-lg` instead of `rounded-full`
- Textarea: `rounded-xl` instead of `rounded-3xl`
- Icon containers: `rounded-lg`
- Send button: `rounded-full` pill
- Remove all `dark:*` classes

#### Removed from homepage (relocated):
- **Solutions Tabs section** → moved to Services page
- **Products section** → moved to Services page as a new section (placeholder content preserved as-is)

---

### Our Vision Page

#### Hero
- Navy background, carousel → `rounded-xl`
- Remove `dark:bg-dark-gradient`

#### Mission Section (3 cards)
- `bg-white`, cards `rounded-xl`
- Icon containers: `rounded-lg`
- Remove all `dark:*` classes

#### How We Work Section
- `bg-gray-50`
- Numbered step icons keep `rounded-full` (small circles)
- CTA gradient box: `rounded-xl`
- Button: `rounded-full` pill
- Remove `dark:bg-navy-950 dark:bg-dark-gradient`

---

### Services Page

#### Hero
- Navy background, carousel → `rounded-xl`

#### Projects Section
- Cards: `rounded-xl`
- Remove all `dark:*` classes

#### Comprehensive Solutions Section
- `bg-gray-50` (remove `dark:bg-navy-950 dark:bg-dark-gradient`)
- Carousel squares → `rounded-xl`
- Service list icon containers keep `rounded-full`

#### New: Solutions Tabs Section (relocated from homepage)
- Added between existing sections
- Tab container and triggers keep `rounded-full` pill style
- Active tab: `bg-white shadow-ios`
- Content visuals: gradient boxes → `rounded-xl`
- Remove all `dark:*` classes

#### New: Products Section (relocated from homepage)
- Cards: `rounded-xl`
- Icon containers: `rounded-lg`
- Keep placeholder content as-is

---

### Projects Listing Page

#### Hero
- Navy, carousel → `rounded-xl`

#### Project Grid
- Cards: `rounded-xl`, 3-column grid
- Remove all `dark:*` classes

---

### Project Detail Page

#### Hero
- Navy background, no structural changes

#### Overview, Challenges, Solution, Results Sections
- Alternating `bg-white` / `bg-gray-50`
- Placeholder image boxes: `rounded-xl`
- Remove all `dark:*` classes

#### Contact Section (bottom)
- Card: `rounded-xl`
- Inputs: `rounded-lg`
- Remove all `dark:*` classes

---

### Team Page

#### Hero
- Navy background
- Visual box: `rounded-xl`

#### Leadership & Extended Team Grids
- Cards: `rounded-xl`
- Remove all `dark:*` classes

#### Detail Modal
- `rounded-xl` instead of `rounded-lg`
- Remove `dark:*` from modal background and text colors

---

### Contact Page

#### Hero
- Navy, carousel → `rounded-xl`

#### Form Section
- Inputs: keep `rounded-lg`
- Contact info card + Business hours card: `rounded-xl`
- Remove all `dark:*` classes

#### Support Section
- `bg-gray-50`
- Buttons: keep `rounded-full` pill style

---

### Case Studies Page

#### Structural Fix
- Remove inline header and footer — use shared `Header`/`Footer` from layout (wrap with `<main>` only, like other pages)

#### Content Sections
- Cards: `rounded-xl`
- Stats/testimonial boxes: `rounded-xl`
- Remove all `dark:*` classes

---

## Files Affected

### Deleted
- `components/ui/theme-toggle-switch.tsx`
- `app/providers/theme-provider.tsx`
- `components/theme-provider.tsx`

### Modified (all pages + components)
- `app/layout.tsx` — remove ThemeProvider wrapper
- `app/globals.css` — remove .dark block, neomorphic shadows
- `tailwind.config.ts` — remove darkMode, update --radius
- `components/header.tsx` — new centered pill navbar, remove theme toggle
- `components/footer.tsx` — remove dark:* classes, use logo image
- `app/page.tsx` — remove 2 sections, update styles
- `app/our-vision/page.tsx` — update styles
- `app/services/page.tsx` — update styles, add relocated sections
- `app/projects/page.tsx` — update styles
- `app/projects/[project-slug]/page.tsx` — update styles
- `app/team/page.tsx` — update styles
- `app/contact/page.tsx` — update styles
- `app/case-studies/page.tsx` — remove inline header/footer, update styles
- `components/support-assistant.tsx` — remove any dark:* classes

### Dependencies
- Remove `next-themes` from `package.json`

## Implementation Order

1. Remove dark mode infrastructure (theme provider, toggle, CSS vars, tailwind config, next-themes dependency)
2. Strip all `dark:*` classes from every file
3. Update header to centered pill navbar
4. Update global border radius and spacing
5. Update homepage (trim sections, restyle remaining)
6. Relocate Solutions Tabs + Products to Services page
7. Update Our Vision page
8. Update Services page (including relocated content)
9. Update Projects listing page
10. Update Project Detail page
11. Update Team page
12. Update Contact page
13. Update Case Studies page (fix inline header/footer)
14. Update Footer
15. Clean up unused imports and components
