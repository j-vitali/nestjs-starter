<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./docs/logo.png">
      <img src="./docs/logo.png" height="128">
    </picture>
    <h1 align="center">ALADIA NestJs Starter Template</h1>
  </a>
</p>

## Getting Started

Aladia comes with a starter skeleton admin dashboard for all official projects.
Here are some rules we want you to follow:

- Write clean code
- Have a strong organization of files & folders
- All extra required plugins/libraries will be provided by our team
- ✨ Magic ✨


## Aladia Starter Template is based on `NestJs` 

Visit [https://docs.nestjs.com/](https://docs.nestjs.com/) to view the full documentation.\



## 🏠 Structure

Folder & Files structure
`
.
├── src
│   ├── core                  (App modules & core files, controllers, schemas, etc.)
│   │   ├── controllers       (Controllers for handling HTTP requests)
│   │   ├── modules           (Modules specific to your application)
│   │   │   ├── user          (Example module)
│   │   │   │   ├── controllers   (Controllers related to the user module)
│   │   │   │   ├── dto           (Data transfer objects for input/output validation)
│   │   │   │   ├── interfaces    (Interfaces related to the user module)
│   │   │   │   ├── services      (Services to handle business logic)
│   │   │   │   └── schemas       (Database schemas or entities)
│   │   ├── common-i18n       (Locales for internationalization)
│   │   ├── sdk               (SDK for extensions)
│   │   ├── db-main-prisma    (Schema, migrations, Prisma client)
│   │   ├── eslint-config-bases (Shared eslint configurations)
│   │   └── ui-lib            (UI components)
│   ├── shared                (Shared code and interfaces)
│   │   ├── dto               (Shared Data Transfer Objects)
│   │   └── interfaces        (Shared Interfaces)
│   ├── data                  (Dummy JSON data for avoiding database stored data)
│   └── ...

`

## 💊 Libraries inside the box
Starter template comes with the following libraries: 

| Name | Link | Installed | Internal by Aladia |
| ------ | ------ | ------ | ------ |
| NestJs +v10 | https://docs.nestjs.com | ✅ | ❌
| PubSub | https://docs.nestjs.com | ✅ | ✅
| gRPC | https://www.npmjs.com/package/@grpc/grpc-js | ✅ | ✅
| Mongoose | https://mongoosejs.com | ✅ | ❌
| Date & Time formats | https://day.js.org | ✅ | ❌
| Lodash | https://lodash.com | ✅ | ❌



## 📦 Installation

Project requires [Node.js](https://nodejs.org/) v16.8+ to run.

1. Make sure you have git, node, and npm installed.
2. Clone this repository locally.
3. Install NestJs CLI `$ npm install -g @nestjs/cli`
4. Run ` $ gcloud auth login ` and then choose ` your Aladia google profile  ` to retrieve user login info
5. Run ` $ npm run login ` to interact with npm <b>private repositories</b>
6. Run ` $ npm install ` to install all internal and external dependencies
7. Run ` $ npm run start:dev ` to run live project
8. Open ` localhost:3000 ` in your browser.
9. Change ` .env.sample ` to ` .env `
10. Done ✅


## 🤖 Creating Modules

Project requires [Node.js](https://nodejs.org/) v16.8+ to run.

`bash
# development
$ nest

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
`



#### Deployment

Deployment will be done by Aladia team.


## Community

The NestJs community can be found on [GitHub Discussions](https://github.com/vercel/NestJs/discussions), where you can ask questions, voice ideas, and share your projects.