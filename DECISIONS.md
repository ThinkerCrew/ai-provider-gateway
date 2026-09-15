# Decision Records (ADRs)

This document tracks major architectural and implementation decisions for the AI Provider Gateway.

## 2026-09-15: Frontend Scaffold & UI Paradigm
- **Decision**: Implemented the frontend admin panel using React, Vite, and React Router.
- **Reason**: Standard, fast modern stack for developer tools.
- **Design Context**: Shifted from an initial dark theme to a 9Router-inspired light theme with a grid background for a cleaner developer infrastructure aesthetic.
- **Outcome**: `Sidebar`, `Header`, and `Providers` pages are scaffolded with mock data and full client-side routing.

## 2026-09-15: Backend Architecture Definition
- **Decision**: Node.js and TypeScript will be used for the backend API, following a modular structure (Routes -> Controllers -> Services -> Provider Manager -> Adapters).
- **Reason**: Ensures separation of concerns, easier testing, and simplifies the addition of new AI providers without breaking core routing logic.

## 2026-09-15: Unified API & Client Abstraction
- **Decision**: The Gateway will expose an OpenAI-compatible API. Clients (like NoteCura) will never possess provider keys or routing logic.
- **Reason**: Decouples client business logic from provider volatility.
