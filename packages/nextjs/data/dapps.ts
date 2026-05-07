export type Dapp = {
  name: string;
  url: string;
  domain: string;
  category: Category;
};

export type Category =
  | "DeFi"
  | "NFTs"
  | "Social"
  | "Identity"
  | "DAOs"
  | "Privacy"
  | "Gaming"
  | "Bridges"
  | "Staking"
  | "Tools";

export const CATEGORIES: Category[] = [
  "DeFi",
  "NFTs",
  "Social",
  "Identity",
  "DAOs",
  "Privacy",
  "Gaming",
  "Bridges",
  "Staking",
  "Tools",
];

export const DAPPS: Dapp[] = [
  // DeFi
  { name: "Uniswap", url: "https://app.uniswap.org", domain: "uniswap.org", category: "DeFi" },
  { name: "Aave", url: "https://app.aave.com", domain: "aave.com", category: "DeFi" },
  { name: "Curve", url: "https://curve.fi", domain: "curve.fi", category: "DeFi" },
  { name: "Lido", url: "https://lido.fi", domain: "lido.fi", category: "DeFi" },
  { name: "Pendle", url: "https://app.pendle.finance", domain: "pendle.finance", category: "DeFi" },
  { name: "Sky", url: "https://sky.money", domain: "sky.money", category: "DeFi" },
  { name: "Ethena", url: "https://app.ethena.fi", domain: "ethena.fi", category: "DeFi" },
  { name: "Synthetix", url: "https://synthetix.io", domain: "synthetix.io", category: "DeFi" },
  { name: "Compound", url: "https://app.compound.finance", domain: "compound.finance", category: "DeFi" },
  { name: "1inch", url: "https://app.1inch.io", domain: "1inch.io", category: "DeFi" },

  // NFTs
  { name: "OpenSea", url: "https://opensea.io", domain: "opensea.io", category: "NFTs" },
  { name: "Blur", url: "https://blur.io", domain: "blur.io", category: "NFTs" },
  { name: "Highlight", url: "https://highlight.xyz", domain: "highlight.xyz", category: "NFTs" },
  { name: "Manifold", url: "https://manifold.xyz", domain: "manifold.xyz", category: "NFTs" },
  { name: "Rarible", url: "https://rarible.com", domain: "rarible.com", category: "NFTs" },
  { name: "POAP", url: "https://poap.xyz", domain: "poap.xyz", category: "NFTs" },
  { name: "Courtyard", url: "https://courtyard.io", domain: "courtyard.io", category: "NFTs" },
  { name: "Foundation", url: "https://foundation.app", domain: "foundation.app", category: "NFTs" },
  { name: "SuperRare", url: "https://superrare.com", domain: "superrare.com", category: "NFTs" },

  // Social
  { name: "Farcaster", url: "https://farcaster.xyz", domain: "farcaster.xyz", category: "Social" },
  { name: "Zora", url: "https://zora.co", domain: "zora.co", category: "Social" },
  { name: "Lens", url: "https://lens.xyz", domain: "lens.xyz", category: "Social" },
  { name: "Towns", url: "https://towns.com", domain: "towns.com", category: "Social" },
  { name: "Rodeo", url: "https://rodeo.club", domain: "rodeo.club", category: "Social" },
  { name: "Orb", url: "https://orb.club", domain: "orb.club", category: "Social" },

  // Identity
  { name: "ENS", url: "https://ens.domains", domain: "ens.domains", category: "Identity" },
  { name: "EAS", url: "https://attest.org", domain: "attest.org", category: "Identity" },
  { name: "SIWE", url: "https://login.xyz", domain: "login.xyz", category: "Identity" },
  { name: "Huddle01", url: "https://huddle01.com", domain: "huddle01.com", category: "Identity" },
  { name: "Livepeer", url: "https://livepeer.org", domain: "livepeer.org", category: "Identity" },
  { name: "ZK Passport", url: "https://zkpassport.id", domain: "zkpassport.id", category: "Identity" },
  { name: "QuarkID", url: "https://quarkid.org", domain: "quarkid.org", category: "Identity" },

  // DAOs
  { name: "Snapshot", url: "https://snapshot.org", domain: "snapshot.org", category: "DAOs" },
  { name: "Tally", url: "https://tally.xyz", domain: "tally.xyz", category: "DAOs" },
  { name: "Aragon", url: "https://aragon.org", domain: "aragon.org", category: "DAOs" },
  { name: "Hats", url: "https://hatsprotocol.xyz", domain: "hatsprotocol.xyz", category: "DAOs" },
  { name: "DAOhaus", url: "https://daohaus.club", domain: "daohaus.club", category: "DAOs" },

  // Privacy
  { name: "Fluidkey", url: "https://fluidkey.com", domain: "fluidkey.com", category: "Privacy" },
  { name: "Railgun", url: "https://railgun.org", domain: "railgun.org", category: "Privacy" },
  { name: "Privacy Pools", url: "https://privacypools.com", domain: "privacypools.com", category: "Privacy" },
  { name: "Rarimo", url: "https://rarimo.com", domain: "rarimo.com", category: "Privacy" },
  { name: "Tornado Cash", url: "https://tornadocash.eth.limo", domain: "tornadocash.eth.limo", category: "Privacy" },

  // Gaming
  { name: "EVE Frontier", url: "https://www.evefrontier.com", domain: "evefrontier.com", category: "Gaming" },
  { name: "Eternum", url: "https://eternum.realms.world", domain: "realms.world", category: "Gaming" },
  { name: "Pirate Nation", url: "https://piratenation.game", domain: "piratenation.game", category: "Gaming" },
  { name: "Eureka", url: "https://eureka.game", domain: "eureka.game", category: "Gaming" },
  { name: "Scout Game", url: "https://scoutgame.xyz", domain: "scoutgame.xyz", category: "Gaming" },
  { name: "Gigaverse", url: "https://gigaverse.io", domain: "gigaverse.io", category: "Gaming" },

  // Bridges
  { name: "Across", url: "https://app.across.to", domain: "across.to", category: "Bridges" },
  { name: "Hop", url: "https://app.hop.exchange", domain: "hop.exchange", category: "Bridges" },
  { name: "Stargate", url: "https://stargate.finance", domain: "stargate.finance", category: "Bridges" },
  { name: "Layerswap", url: "https://layerswap.io", domain: "layerswap.io", category: "Bridges" },
  { name: "Relay", url: "https://relay.link", domain: "relay.link", category: "Bridges" },
  { name: "Particle Network", url: "https://particle.network", domain: "particle.network", category: "Bridges" },

  // Staking
  { name: "Launchpad", url: "https://launchpad.ethereum.org", domain: "launchpad.ethereum.org", category: "Staking" },
  { name: "Rocket Pool", url: "https://rocketpool.net", domain: "rocketpool.net", category: "Staking" },

  // Tools
  { name: "Etherscan", url: "https://etherscan.io", domain: "etherscan.io", category: "Tools" },
  { name: "Safe", url: "https://app.safe.global", domain: "safe.global", category: "Tools" },
  { name: "Tenderly", url: "https://tenderly.co", domain: "tenderly.co", category: "Tools" },
  { name: "Dune", url: "https://dune.com", domain: "dune.com", category: "Tools" },
];

export const faviconUrl = (domain: string, size = 128) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
