## Step 1: Generate a Resource

Generate a resource:

```bash
nest generate resource
```

Files Generated:
- `src/<resource_name>/entities/<resource_name>.entity.ts`
- `src/<resource_name>/<resource_name>.controller.ts`
- `src/<resource_name>/<resource_name>.service.ts`
- `src/<resource_name>/<resource_name>.module.ts`

## Step 2: Connect to DB & create Schema

Navigate to `src/<resource_name>/<resource_name>.module.ts`. for connectio to collection MongoDB
Navigate to `src/<resource_name>/<resource_name>.schema.ts`. to define schema

## Step 3: Define Your ROUTES

Navigate to `src/<resource_name>/<resource_name>.controller.ts`.

## Step 4: Implement Your Service

Navigate to `src/<resource_name>/<resource_name>.service.ts`.

## Step 5: Configure Your Module

Import and add the generated module to your `app.module.ts`.

## Step 6: Test Your Endpoint

Use GraphQL Playground or Postman to test your endpoint.

## Conclusion

You've created a full API endpoint with Nest GS Resource Generator. Explore more NestJS and Nest GS features for enhancements.
```
