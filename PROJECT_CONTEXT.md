# Project Context: AI Provider Gateway

## Project Name
AI Provider Gateway

## Product Type
Production-grade AI Provider Gateway / AI Router / Developer Infrastructure Platform

## Core Product Idea
The AI Provider Gateway is a standalone, production-ready platform that gives client applications ONE unified API to interact with multiple AI providers. 

Client applications (like NoteCura) should NOT need to integrate directly with multiple AI providers. Instead, they interact only with the Gateway, which securely manages provider credentials, validates requests, routes to the appropriate provider (handling fallbacks and load balancing), and returns a normalized response.

### Example Client Flow
NoteCura -> AI Provider Gateway -> Vision-capable AI provider -> Extracted result -> NoteCura's processing pipeline

## Important Note on Relationship with NoteCura
The AI Provider Gateway is a **separate product** from NoteCura. NoteCura owns its domain-specific note-processing algorithms, while this Gateway strictly provides the AI infrastructure and unified API access. We must not move NoteCura's business logic into the Gateway.

## Authorized Providers Only
The system aggregates multiple provider integrations only where we are legitimately authorized to use those accounts, API keys, credits, or plans. We do not engage in quota bypassing, account farming, or unauthorized API access.

## Primary AI Engineer Directives
As the primary engineering agent, my responsibilities include:
- Preserving project consistency over time.
- Ensuring every new feature fits into the existing architecture, security model, and deployment model.
- Prioritizing maintainability, security, scalability, and modularity over quick fixes.
- Maintaining this persistent project documentation as the single source of truth.
