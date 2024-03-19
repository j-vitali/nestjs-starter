<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="prefers-color-scheme: dark" srcset="./docs/logo.png">
      <img src="./docs/logo.png" height="128">
    </picture>
    <h1 align="center">ALADIA NestJs Starter Template</h1>
  </a>
</p>

## Getting Started

Aladia comes with a starter template for all <b>internal microservices</b>.
<br/>Here are some rules we want you to follow:

- Write clean code
- Respect folders architecture
- Have a strong organization of files & folders
- All extra required <b>plugins/libraries</b> will be discussed in team
- ✨ Magic ✨


## Aladia Starter Template is based on `NestJs v10.3^`

Visit [https://docs.nestjs.com/](https://docs.nestjs.com) to view the full documentation.



## 🏠 Structure

Folder & Files structure

```.
├── docs                      Docs
├── src
│   ├── config                Config folder containing all config files
│   ├── common                Common code and interfaces
│   │   ├── enums             Common ENUMS
│   │   └── utils             Common Ultils functions, like date transformer...
│   ├── data                  Dummy JSON data for avoiding database stored data
│   ├── users                 Example Module (All modules must be root path based)
│   └── ...                   Other Module here...
│   └── ...                   Other Module here...
│   ├── core                  App modules & core files, schemas, etc.    
│   │   ├── casl              CASL ability
│   │   ├── cache             Cache module
│   │   ├── decorators        Data transfer objects for input/output validation
│   │   ├── external          Interfaces related to the user module
│   │   ├── interfaces        Services to handle business logic
│   │   ├── interceptors      Services to handle business logic
│   │   ├── locales           Locales for internationalization
│   │   ├── middlewares       Middlewares folder
│   └── ...
```

## 💊 Libraries inside the box
Starter template comes with the following libraries: 

| Name | Link | Installed | Internal by Aladia |
| ------ | ------ | ------ | ------ |
| NestJs v10.3^ | https://docs.nestjs.com | ✅ |
| All required NestJs libraries | https://docs.nestjs.com | ✅ |
| PubSub | https://docs.nestjs.com | ✅ | ✅
| gRPC | https://www.npmjs.com/package/@grpc/grpc-js | ✅ | ✅
| Mongoose | https://mongoosejs.com | ✅ |
| Date & Time formats | https://day.js.org | ✅ |
| Lodash | https://lodash.com | ✅ |



## 📦 Installation

Project requires [Node.js](https://nodejs.org) v16.8+ to run.

1. Make sure you have git, node, and npm installed.
2. Clone this repository locally.
3. Install NestJs CLI ```$ npm install -g @nestjs/cli ```
4. Run ``` $ gcloud auth login ``` and then choose ``` your Aladia google profile  ``` to retrieve user login info
5. Run ``` $ npm run login ``` to interact with npm <b>private repositories</b>
6. Run ``` $ npm install ``` to install all internal and external dependencies
7. Run ``` $ npm run start:dev ``` to run live project
8. Open ``` localhost:3000 ``` in your browser.
9. Change ``` .env.sample ``` to ``` .env ```
10. Done ✅


## 🤖 Development


```
# dev mode
$ npm run start:dev

# production mode
$ npm run start:prod

# before committing to git
$ npm run lint:fix
```


## 🚀 Deployment

Deployment will be done by Aladia team.


## 🦾 Community
1. Telegram
2. [Discord](https://discord.gg/nestjs)