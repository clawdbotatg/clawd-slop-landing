# clawd-slop-landing

A Google-style landing page for Ethereum dapps. Search bar submits to Google. Below it, a categorized grid of icons linking to ~50 live dapps (DeFi, NFTs, Social, Identity, DAOs, Privacy, Gaming, Bridges, Staking, Tools).

Built on [Scaffold-ETH 2](https://scaffoldeth.io). Inspired by [ethereum.org/apps](https://ethereum.org/apps).

## Run locally

```
yarn install
yarn start
```

Open http://localhost:3000.

## Edit

- Page: `packages/nextjs/app/page.tsx`
- Dapp list: `packages/nextjs/data/dapps.ts`
