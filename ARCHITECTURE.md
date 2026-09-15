# Architecture Overview

## The Golden Rule
The gateway must hide provider complexity from client applications. A client should only know the Gateway URL, its Client API key, and the unified API format. It should never know provider credentials, routing rules, or fallback logic.

## System Architecture

```mermaid
graph TD
    Client[Client Application (e.g., NoteCura)] -->|Client API Key| Gateway[AI Provider Gateway API]
    
    subgraph Gateway Core
        Gateway --> Auth[Authentication / Authorization]
        Auth --> Validation[Request Validation]
        Validation --> Detection[Capability / Model Detection]
        Detection --> Routing[Routing Engine]
        Routing --> Manager[Provider Manager]
    end
    
    subgraph Provider Adapters
        Manager --> AdapterA[Provider Adapter A]
        Manager --> AdapterB[Provider Adapter B]
        Manager --> AdapterC[Provider Adapter C]
    end
    
    AdapterA --> API_A[External AI Provider]
    AdapterB --> API_B[External AI Provider]
    AdapterC --> API_C[External AI Provider]
    
    API_A -.->|Normalize Response| Gateway
```

## Backend Architecture (Planned)
- **Stack**: Node.js, TypeScript
- **Layers**:
  - Routes
  - Controllers
  - Services (Auth, Usage, Health, Logging, Rate Limiting)
  - Provider Manager
  - Routing Engine
  - Provider Adapters

## Provider Model
Integrations use an **adapter/driver architecture**. Adding a new provider requires creating a new adapter that conforms to a common Provider Interface, meaning the core gateway does not need to be rewritten.

## Routing Engine
The Routing Engine is modular and handles intelligent provider routing based on:
- Requested model / capability
- Provider availability and health
- Latency, estimated cost, and rate-limit state
- Priorities and configured rules (e.g., Round robin, Lowest cost, Priority).

## Fallback System
The system handles timeouts, temporary errors, rate limits, and health failures via a fallback mechanism. It implements retry limits, exponential backoff, and circuit breaking concepts to prevent infinite retry loops.

## Database (Planned)
A production database will be used to store:
- Users, clients, and API key metadata
- Provider configurations and encrypted credentials
- Usage, logs, and routing rules
*Database technology choice is pending documentation.*
