<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://aladia.it/wp-content/uploads/2021/12/Logo-aladia-con-matita-sd-1536x660.png">
      <img src="https://aladia.it/wp-content/uploads/2021/12/Logo-aladia-con-matita-sd-1536x660.png" height="128">
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


## Aladia ERP is based on NestJs

Visit [https://docs.nestjs.com/](https://docs.nestjs.com/) to view the full documentation.\




## 🏠 Architecture

Folder & Files architecture
```jsx
- src
    - pages (all pages relative to /admin url)
      - dashboard
      - settings
      - users 
      - orders
      - ...and so on... Every folder must have ```kebab``` style name
    - lib
        - api (folder - contains all api files with all actions)
    - shared (folder - contains all components shared between the app)
      - dashboard
      - settings
      - users 
      - orders
      - ...and so on... Every folder must have ```kebab``` style name
- assets
    - styles (we use .scss, so all)
        - components (folder - contains all style files for every custom class component)
            - _sidebar.scss
            - _topnav.scss
        - pages (folder - contains all style files for every custom class page)
            - _dashboard.scss
            - _settings.scss
        index.scss (root index files to import scss styling)
    - fonts (not required - folder contains custom fonts or icons .woff)
    - images (folder - contains all static images required)
- public (logo & favicon.ico)
- data (folder - contains static data .json - example options checkboxes, etc... this avoid make other api requests)
```

## 💊 Libraries inside the box
Starter template comes with the following libraries: 

| Name | Link | Installed | Internal library |
| ------ | ------ | ------ | ------ |
| NestJs v10 | https://docs.nestjs.com/ | ✅ | ❌
| PubSub | https://docs.nestjs.com/ | ✅ | ✅
| Mongoose | https://mongoosejs.com/ | ✅ | ❌
| Axios | https://axios-http.com/docs/intro | ✅ | ❌
| Date & Time formats | https://day.js.org/ | ✅ | ❌



## 📦 Installation

Aladia ERP requires [Node.js](https://nodejs.org/) v16.8+ to run.

1. Make sure you have git, node, and npm installed.
2. Clone this repository locally.
3. Execute ``` npm i ``` and then ``` npm run dev ``` from the root directory of the repository.
4. Open ``` localhost:3000 ``` in your browser.


## 🤖 Development
We suggest to develop locally backend & frontend, then when all jobs are done (99,9%) we can proceeed with deployment.
```sh
.env.local
.env.development
.env.production
```


#### Deployment

Deployment will be done by Aladia team.


## Community

The NestJs community can be found on [GitHub Discussions](https://github.com/vercel/NestJs/discussions), where you can ask questions, voice ideas, and share your projects.