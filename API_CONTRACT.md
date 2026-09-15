# API Contract

The AI Provider Gateway exposes a unified, OpenAI-compatible external API to client applications.

## Base URL
`https://api.[your-domain].com/v1`

## Authentication
Clients must authenticate using a Bearer token (their Client API Key).
`Authorization: Bearer <CLIENT_API_KEY>`

## Endpoints (Conceptual Initial Phase)

### 1. Chat Completions
**POST** `/chat/completions`
- Standard OpenAI-compatible format.
- The Gateway abstracts the actual provider used.

### 2. Models
**GET** `/models`
- Returns a list of models supported by the currently active and healthy providers in the gateway.

### 3. Gateway Health
**GET** `/health`
- Returns the operational status of the Gateway and aggregated provider health.

### 4. Client Usage
**GET** `/usage`
- Returns token and request usage for the authenticated Client API Key.

## Provider Adapters (Internal API)
Internally, all Provider Adapters must implement a standardized interface to normalize requests and responses before they are sent back to the client.
