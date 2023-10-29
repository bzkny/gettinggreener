# Hydrogen template: Demo Store

Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **full-featured setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Tailwind CSS (via PostCSS)
- Full-featured setup of components and routes

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher

```bash
npm create @shopify/hydrogen@latest -- --template demo-store
```

Remember to update `.env` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Local development

```bash
npm start
```

---

## Connected To A Different Shopify Store

1. Go to the [shopify admin panel](https://admin.shopify.com/store) and choose the store you want to connect.

2. Click "Settings" In lower left corner.

3. Click "Apps & Sales Channels" from left side menu.

4. Click "Develop Apps".

5. Click "Allow Custom app development".

5. Click "Create an app". Give it a name and install it.

6. Click on the installed app.

7. Go to Configuration tab and select all STOREFRONT api scopes. (Note: you do NOT need Admin api scopes- you ONLY want Storefront scopes).

8. Take the "Storefront API Access Token" from shopify dashboard and replace "PUBLIC_STOREFRONT_API_TOKEN" in the .env file