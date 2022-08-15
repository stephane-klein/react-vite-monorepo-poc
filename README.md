A repository to test React + [Vite.js](https://github.com/vitejs/vite) in a monorepo context.

See the kickoff issue: https://github.com/stephane-klein/backlog/issues/36

See instruction in [`services/app_a/`](services/app_a/).

Repository content:

- App centric monorepo project:
  > "app centric" repositories which are used mainly for developing applications and products. This is a common setup in companies.
  > Such repos are characterized in having an apps and packages or libs folder, where the apps folder contains the buildable and
  > deployable applications, while the packages or libs folder contains libraries that are specific to one or multiple applications
  > that are being developed within the monorepo. You can still also publish some of these libs to a public registry.
- Powered by `pnpm`, with a `pnpm-workspace.yaml` file
- Lib setup:
  - `react-router-dom`: `5.3.3`
  - `chakra-ui`: `2.2.8`
- `estlint` is setup
