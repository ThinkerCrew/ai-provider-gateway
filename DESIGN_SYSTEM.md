# Design System

The visual design system of the AI Provider Gateway is meant to evoke a professional, developer-first infrastructure platform.

## Design Source of Truth
- **Stitch MCP**: Google Stitch is used for UI/UX prototypes and screen generation.
- **Reference**: The current aesthetic is based on the 9Router Light Theme (updated from the original dark theme).

## Global Theme Variables
- **Background**: Cream / Off-white (`#fdfaf6`) with a subtle graph-paper grid pattern.
- **Cards & Sidebar**: Pure white (`#ffffff` / `#fefefc`).
- **Primary Accent**: Orange (`#ec5d44`).
- **Text Colors**: Dark charcoal (`#111827`) for primary text, gray (`#4b5563`) for secondary text.
- **Status Indicators**:
  - Green (`#10b981`): Connected, Ready, Healthy.
  - Amber (`#f59e0b`): Degraded.
  - Red (`#ef4444`): Error, Disconnected.

## Core Components
- **Sidebar**: Narrow, icon-heavy left navigation with a Mac-style window control header (Red, Yellow, Green dots) and a collapsible "Media Providers" system section.
- **Provider Cards**: Compact, bordered cards containing a provider logo, name, and a dot-based status indicator (e.g., "● 1 Connected").
- **Header**: Sticky top bar containing breadcrumbs/page title, global search, and utility icons (Donate, Theme, Language, Grid).
- **Modals**: Used for sensitive operations like adding provider credentials. Must always mask secret inputs.

## Principles
- **Dense & Compact**: Information density should be high. Avoid marketing-style bloat.
- **Clean Interactions**: Use subtle hover states (`box-shadow`, border color changes).
- **Original Identity**: Do not copy exact proprietary branding. The product is named **AI Provider Gateway**.
