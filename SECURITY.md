# Security Architecture

Security is a first-class requirement for the AI Provider Gateway.

## API Key & Credential Segregation
1. **Client API Keys**: Used by client applications (like NoteCura) to access the gateway.
2. **Provider Credentials**: Used by the gateway to access upstream AI APIs (e.g., OpenAI, Anthropic).

**CRITICAL RULE**: Provider credentials must **NEVER** be sent to the frontend, exposed to client applications, hardcoded in source code, or committed to Git.

## Best Practices Implemented / Planned
- **Frontend Masking**: Any UI input handling secrets (e.g., adding a provider) must mask the input visually. The frontend state must never retain the secret after submission.
- **Encryption at Rest**: Provider credentials must be encrypted in the database.
- **Hashing**: Client API keys should be hashed for verification.
- **Environment Configuration**: Use `.env` or secure secret managers for deployment configurations.
- **HTTPS**: Enforce HTTPS in production.
- **Logging Safety**: Logs must **NEVER** contain provider API keys, client secrets, passwords, tokens, or raw sensitive user prompts (unless explicitly authorized for audit).
- **Data Minimization**: Do not store raw client application content (like NoteCura notes) unnecessarily. Temporary processing with minimal retention is preferred.

## Protection Mechanisms
- Rate limiting per Client API Key.
- Request validation and input size limits.
- Timeout limits on upstream provider calls.
- Abuse protection and CORS configuration.
