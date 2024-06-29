# Triston Wasik Job Hunting Adventure

## What is this

This is a simple app I threw together to document my 2024 job hunting adventure after being laid off. It's also helping me document my job hunting progress for unemployment. The applications are currently flatfiled so anyone can update them to their own needs if they wish to use this.

- [My Application Adventure](https://applications.tristonwasik.com)
- [Portfolio](https://tristonwasik.com)

## Install & Setup

1. Clone repo

```shell
git clone https://github.com/TristonWasik/application-tracker.git
```

2. Install dependencies

```shell
cd ./application-tracker
npm i
```

3. Start dev server

```shell
npm run dev
```

## Deployment

### Manual deployments - With Caprover CLI

1. Optional (only need to do it once). Install Caprover CLI and then run caprover login.

```shell
npm i -g caprover

caprover login
```

2. Run deploy. This runs the build and deploy commands which runs the following, in order: automated jest unit tests, creates a new tarball from dist folder, and then runs the Caprover deploy CLI command using the tarball.

```shell
npm run deploy
```

### Manual deployments - Without Caprover CLI

1. Run build. This manually runs tsc and the jest unit tests.

```shell
npm run build
```

2. Run build:tar. This manually creates the tarball from the dist folder.

```shell
npm run build:tar
```

3. Drag and drop tarball into Caprover build menu.

### Automatic deployments

This is based on the following [caprover documentation](https://caprover.com/docs/ci-cd-integration/deploy-from-github.html)

1. Add the following secrets to Github.

```shell
APP_NAME
APP_TOKEN
CAPROVER_SERVER
```

2. Create a new branch called 'production' or PR into your 'production' branch and it will automatically deploy
