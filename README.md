<p align="center">
  <a href="https://nextjs.org">
      <img src="https://lh3.googleusercontent.com/fife/ALs6j_HK20qehG4OXFymC3byjTa3FPZXMQJVUsmWbnV9o0mulS6GDGnenSTFN1zu889ko6UB8ncLrynxkUkTcJb0sIZyge2AFcFONY0Zz_1nLlHsiDH38Pp74yoHQdfdY4Nokv-4cYZfv4C16LBoFKFlZ0p4gnh-sDgG-ETKi3gl4qQldPnq7ev_QCM_mDPpQxgALNiiDPvohJ6H6n0tjCDhTolomqHK4oyxDJmtSoejvvm9VJ6hF78Wbz10_vSu2uKA_2X9iBpJcIuj5QrRKOxf1mRD1A91l7-_7ASmI82GyszOJF2YwioNnqtfirVAt-jdCbP4_qF6lxSO0wUvuFn2y7oYCvaFaBhxmdG0JDgsVl2ohKWT7fowmpZd68yLpdf7ye1F1NLLTKKrz3YTqD8sQJx1B8xu4xr2NZgDLOjcXK9nhGCBRNZahs2HOTosvL7uACYyqeEjTHy992wt7wk7NeVbaWG2-RfdbqQF-YD0bgp42ckA9nqiP5t5bSQ_AtOHow60H9RgNTIPruSTOuKftRdhiTCMYsdIgy7F_OyQU-WO3eM3T87LfZjrrdfdfYIGIJ3qL__m1cpi8c34y-4qfimA_T1qTBclLe_1SlESASKwONjksMqURDK2AyCHq6Ccv350pSd-0HlszZXyXYLmkMBDJB97WfvqHaOnCQUVrC7iFp15l4wWPAhXoM0cDlW5aGaivFLeRFhCLe8ENwXK0NS19pY4UVq2nX8l4Ghkvumr-BbPslhJY3gEp_mjA7SiKkAb7P5DqlpinJzk3z6cMNFF6kXlyCjUTuxyOb6Zxfqhx96M8wBBPvD9qytnliwLB1bgTMy47qN5UDm_3XiQbkwqXi_FntmWErzNfJA1VtRCI9SxD8eVasIPUKWWDmLnfgNGFp_hHxssD_pcGPcHSUvHZniXChIkjjDymRi4hzGB4BvnYlbbCSehU6EmLMaEwhrvHw-12K_p6Cba8u6QEQL7xFuUnVCLqCXSeOBanVOuVuA9_08WNvHKPZWs1HP27roIdpATaZW61ByJ59FBwJy7CQx7KUfZSWf31JLhg8iDgFAe4NkyrgY-P807dZNH2PgiWK95XIouChEao2lvB97ZU9LEn6lbZjRRvEjFu7SV9GSCq0AJoahk_cZRFp84pmh1ifdFhPa7brnmbIVJXAaudVU9DArVgDnJevLREnT_aZ1008MaSz7AE9CTmiajg7uX6PZeWoTFu_DcTzPxpHXr3bSaVgvk79_7cXXufzu4lUHLx8EmPG9feyX655sXd7iMBIuUQstOoyfjkc9dS0gq-40RwgesonUL5hyldzUzk4fuLz77AAoBCzO6cYEx7NiBht9Gk4_DhdAc-g1kW2J3ME6RSSjMabM3cThPRjYxKthz_EOkq8DYJRI_lIKmAAR4clV56gWbfYqEuLgy2pxOB28uaYw4UU2Kb0sGqAFVQuLQ8R2tULakfHCfVtb2lMk1GMgQR3FTv8Zb9fYBIUn156p9g5E7BW-kGrMMq2mxu4GS7Dqs51D1ckJ02xAaE8Eseku0ERf9y6c1uuy9zGIUSv5eP4ZhmIBtSJ0uW8BekF25MNocqtjm5h_BWjy44SmgHXS18P2Q_exTIoZfpLZTcjddiYxuQFIjIUDFu6rMlrLyempujgkqh9xgwPy7SDfTQFTNtc0B6j0_-bg5kqu-1cA=w2880-h1414" height="128">
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
├── data                      Dummy JSON data for avoiding database stored data
├── src
│   ├── config                Config folder containing all config files
│   ├── common                Common code and interfaces
│   │   ├── enums             Common ENUMS
│   │   └── utils             Common Ultils functions, like date transformer...
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