# Lab 3

## Installation

1. Install dependencies.

   ```shell
   npm i
   ```

2. Duplicate `.env.template`.
   ```shell
   cp .env.template .env
   ```

## Running

1. Compose a MongoDB Docker image and run it as a container.

   ```shell
   npm run db:dev:restart
   ```

2. Compile TypeScript into JavaScript and run the application.

   ```shell
   npm run build && npm run start
   ```
