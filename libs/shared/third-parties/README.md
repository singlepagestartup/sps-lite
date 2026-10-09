# Third-Party Services Integration

A library for integrating and managing third-party services in the SinglePageStartup (SPS) project. This library provides standardized interfaces and utilities for working with external services and APIs.

## Structure

```
src/
└── lib/
    ├── aws/              # AWS services integration
    └── telegram/         # Telegram bot integration
```

## Available Integrations

### AWS Services

- S3 storage
- CloudFront CDN
- Lambda functions
- API Gateway
- Other AWS services

### Telegram

- Bot API integration
- Message handling
- Webhook setup
- User interactions

### OpenRouter

`OpenRouter.generate` handles chat completions and function-tool calls. Requests
for `typesafe/jev-router` include the `jev-router` plugin with `cost_tier: low`.
Billing records the model returned by OpenRouter and its reported cost.

`OpenRouter.decide` sends typed Choice, Noul, or Score questions to
`https://openrouter.ai/api/alpha/decisions`, using `OPEN_ROUTER_API_KEY`. It
validates answers against the supplied questions and normalizes Decisions
`input_tokens` and `output_tokens` into the shared billing format. It returns
structured answers or an error, retaining reported usage even when answer
validation fails. Domain routing and profile permissions live in RBAC services.

## Usage

```typescript
import { AwsService, TelegramService } from "@sps/shared/third-parties";

// AWS example
const aws = new AwsService({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Telegram example
const telegram = new TelegramService({
  token: process.env.TELEGRAM_BOT_TOKEN,
  webhookUrl: process.env.TELEGRAM_WEBHOOK_URL,
});
```

## Configuration

Each service requires specific configuration:

### AWS Configuration

```typescript
interface AwsConfig {
  region: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
  // Additional AWS-specific config
}
```

### Telegram Configuration

```typescript
interface TelegramConfig {
  token: string;
  webhookUrl: string;
  // Additional Telegram-specific config
}
```

## Error Handling

Each service includes standardized error handling:

```typescript
try {
  await service.operation();
} catch (error) {
  if (error instanceof ServiceSpecificError) {
    // Handle specific service error
  } else {
    // Handle general error
  }
}
```

## Best Practices

1. **Security**:

   - Never commit credentials to version control
   - Use environment variables for sensitive data
   - Implement proper access controls

2. **Error Handling**:

   - Implement proper error boundaries
   - Log errors appropriately
   - Provide fallback mechanisms

3. **Performance**:

   - Implement caching where appropriate
   - Use connection pooling
   - Monitor API rate limits

4. **Maintenance**:
   - Keep dependencies updated
   - Monitor service health
   - Document API changes

## Testing

Services are tested using:

- Unit tests for individual services
- Integration tests for API interactions
- Mock services for development

## License

MIT
