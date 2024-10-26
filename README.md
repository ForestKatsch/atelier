# Atelier

## Get started

1. Install dependencies

```bash
yarn install
```

2. Start the app

```bash
yarn start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Changelog

### 0.1.1

- Update paths to remove the need for `@/src/...`
- Fix some styling issues caused by incorrect Prettier config
- Add TanStack Query

### 0.1.0

- Set up Expo Prebuild (run with `yarn prebuild`)
- Added `prettier` (run with `yarn fix:prettier`)
- Built `yarn fix:version` to automatically write package.json's version to app.json
- Added `eslint` (run with `yarn lint`)
