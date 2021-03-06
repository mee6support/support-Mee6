// ===============================================================================
// đŽá´á´á´6â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`á´á´á´6.env`)) {
  require(`dotenv`).config({
    path: `./á´á´á´6.env`,
  });
} else {
  require(`dotenv`);
}
// ===============================================================================
// đŽá´á´á´6â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
const env = {
  Mee6: process.env.Mee6 === undefined ? `` : process.env.Mee6,
  HEROKU_API:
    process.env.HEROKU_API === undefined ? "Null" : process.env.HEROKU_API,
  HEROKU_BOT_NAME:
    process.env.HEROKU_BOT_NAME === undefined
      ? "Null"
      : process.env.HEROKU_BOT_NAME,
  IMDB: `5e36f0db`,
  Mee6IX: `^[x]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: `9ffb44def388957`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./á´á´á´6.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./á´á´á´6.db`
      ? new Sequelize({
          dialect: `sqlite`,
          storage: process.env.DATABASE_URL,
        })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }),
  ERROR: "https://i.postimg.cc/q7GB8m6s/Error0.png",
  MEE: "https://i.postimg.cc/RZ11rBnw/Mee6.png",
  INVL: "https://i.postimg.cc/v8p25RV9/Mee6-Invalid.png",
  ARC: "https://i.postimg.cc/Nf3D2RZx/Mee6-Args.png",
  UPT: "https://i.postimg.cc/FH22ny07/Meeseeks-Box.png",
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
  SUDO: process.env.KING === undefined ? `` : process.env.KING,
};
module.exports = env;
// ===============================================================================
// đŽá´á´á´6â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
