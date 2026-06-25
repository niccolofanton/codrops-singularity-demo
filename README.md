<div align="center">

# SINGULARITY

Demo for the tutorial on optimizing complex Three.js scenes while preserving quality

![Singularity showcase](./showcase.gif)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/niccolofanton/codrops-singularity-demo?style=social)](https://github.com/niccolofanton/codrops-singularity-demo/stargazers)

**[Live demo](https://codrops-singularity-demo.pages.dev)** · **[Article on Codrops](https://tympanus.net/codrops/2025/02/11/building-efficient-three-js-scenes-optimize-performance-while-maintaining-quality/)** · **[Mirror demo](https://singularity-codrops.netlify.app/)**

</div>

## Installation

This project uses Yarn (a `yarn.lock` is committed, so Yarn is the canonical path).

Install dependencies:

```bash
yarn
```

Start a local development server:

```bash
yarn dev
```

Create a production build:

```bash
yarn build
```

### Using npm instead

If you prefer npm, note that the dev dependencies pin `eslint ^9` and `eslint-config-next 15.1.6` while the runtime uses `next 14.2.22`, which causes a peer-dependency conflict on install. You can work around it with `--force` (it skips the peer check; it does not change the installed runtime):

```bash
npm install --force
npm run dev
npm run build
```

## Tech stack

- [Next.js 14](https://nextjs.org/) + TypeScript
- [React Three Fiber](https://r3f.docs.pmnd.rs/) and [Drei](https://github.com/pmndrs/drei) for the Three.js scene
- [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) for visual effects
- [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) for physics
- [Leva](https://github.com/pmndrs/leva) and [r3f-perf](https://github.com/utsuboco/r3f-perf) for live tweaking and performance monitoring
- [Tailwind CSS](https://tailwindcss.com/)

## Credits

Original models
- [gameboy](https://sketchfab.com/3d-models/gameboy-pokemon-1hourchallenge-0f2b0ce9c5c44499b2f00c128b3e36b9)
- [klonoa 2 emerald ring](https://sketchfab.com/3d-models/emerald-ring-63d3092cda234758bfb33933065bc738)
- [rayman](https://sketchfab.com/3d-models/rayman-7514fb46a34a4d3d8d41f7c7af23e084)
- [solid snake](https://sketchfab.com/3d-models/pc-pccomputer-metal-gear-solid-solid-snake-017969e81a3642f7981a8a6f6af83a2e)
- [clank ](https://sketchfab.com/3d-models/clank-runcycle-01-ce5b53285abb41b9b703d7d557f2d474)
- [crash bandicoot](https://sketchfab.com/3d-models/crash-bandicoot-1b03d855ede0483f8fa98ce0fdf7f62b)
- [daft punk](https://sketchfab.com/3d-models/daft-punk-guy-manuel-no-estilo-de-ps1-7791f93ccba145c5a7a638d630b6af5f)
- [minecraft pickaxe](https://sketchfab.com/3d-models/minecraft-diamond-pickaxe-b1bc7d6a3db246d5b47449ae2b2706fd)
- [minecraft steve](https://sketchfab.com/3d-models/minecraft-player-dd0d794c2a9b45868effdfec8a3ef471)
- [ape escape](https://sketchfab.com/3d-models/pipo-monkey-ape-escape-23ae06bb5cf84e13ae973721fa5f5625)
- [mario](https://sketchfab.com/3d-models/ds-dsi-super-mario-64-ds-mario-e7ddf799cca44c93809f55c0f3a77200)
- [ak47](https://sketchfab.com/3d-models/ps1-style-ak-47-c05cea3e51484331bfb4c75348d659ef)
- [dualshock](https://sketchfab.com/3d-models/dualshock-ps1-f7c2b63cb5dd430bab71ec7ff4c8620e)
- [halo energy sword](https://sketchfab.com/3d-models/halos-energy-sword-04bef67bf7cb46e7b81f4b7acbadf180)
- [vhs](https://sketchfab.com/3d-models/vhs-tapes-71e8e73bc3eb4014934faafb3658403a)
- [dropout bear](https://sketchfab.com/3d-models/dropout-bear-80f178fb241541c6933d93b6aefc1087)
- [deadmau5](https://sketchfab.com/3d-models/silver-deadmau5-helmet-370f0b9f59054bc8b89f8c95bf2b6d94)
- [sly cooper](https://sketchfab.com/3d-models/sly-cooper-cane-e01de6112eae471f84c7c8625cbf5ba2)
- [zelda rupee](https://sketchfab.com/3d-models/rubis-zelda-0efd5cbc4c3d48c6b6ab8d0a19c061ee)
- [daxter](https://sketchfab.com/3d-models/daxter-f6d35de8cbfb4fd2ae58fe59be1fb7f4)
- [juggernog](https://sketchfab.com/3d-models/juggernog-perk-machiene-1000b8e63bcd4da5a54f3ccbaea1930a)

## Misc

Follow *Niccolò Fanton*: [Twitter](https://x.com/niccolofanton), [Instagram](https://www.instagram.com/niccolofanton), [GitHub](https://github.com/niccolofanton) 

Follow Codrops: [Bluesky](https://bsky.app/profile/codrops.bsky.social), [Facebook](http://www.facebook.com/codrops), [GitHub](https://github.com/codrops), [Instagram](https://www.instagram.com/codropsss/), [X](http://www.x.com/codrops)

## License
[MIT](LICENSE)

Made with :blue_heart:  by [Codrops](http://www.codrops.com)
