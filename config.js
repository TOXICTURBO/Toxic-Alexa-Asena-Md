/* Copyright (C) 2022 X-Electra.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

X-asena X-Electra
*/

const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: "kick",
  HANDLERS: process.env.HANDLERS || "^[,]",
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "Toxic-Alexa_V4",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "{pp}Hi @user Welcome to @gname\nYou're our @count/513 Members ",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "TurboMods",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/whatsasena.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
          logging: false,
        }),
  SUDO: process.env.SUDO || "916380260672,2347014889291",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  WORK_TYPE : process.env.WORK_TYPE || "public"
};
