### BanPayChallenge
Challenge  make Endpoint

### In  this ocation  not  ignore .env  in my  repo for share enviroment for  challengue, but  I think  the  best  way  is  igore this file for  add security  in app.

Its correct  change  port  and db conecttions  for db  testing

### After  to  clone  the project run this  commnad  for  install dependencies
npm i 

### Create  Db banpay  with  mariadb
Its  necesary  create  this  DB  banpay

### Run  migrations  for  create model  of  tables use  this comand o run in package.json
dotenv npx sequelize-cli db:migrate

### After  to run migrations,  run seeder  withs  this  command
dotenv npx sequelize-cli db:seed:all

### After  ro  run migrations  and  seeders, run this  commnad
dotenv nodemon ./index.js

### In the  html  page  on port 8085, have  a  brief direcctions  an  link for  swagger

### Create token for  ad autorizin  on app myToken

### For  testing  methods  use  postman, with  body  raw  JSON Structure for send  infromation  in a methods.

### Its possible  run dockerfile on po 8085




 
