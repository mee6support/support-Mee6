// ===============================================================================
// ð®á´á´á´6â¢ á´á´á´ á´É´á´á´á´ á´¡Êá´á´ê±á´á´á´ á´ê±á´ÊÊá´á´ á´¡Éªá´Ê 80+ á´á´á´á´á´É´á´ê± ê°á´Ê Êá´á´Ê á´ÊÉªá´ á´á´á´ á´É´á´ É¢Êá´á´á´-á´ê±á´É¢á´
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const âÎ¹ÑÎ·Ñ = require("../../á´á´á´6/catch");
const ê±ÉªÉ¢É´ = require(`../../á´á´á´6/ê±ÉªÉ¢É´`);
var á´á´Éªá´x = new RegExp(ê±ÉªÉ¢É´.Mee6IX, "g");
var á´á´Éª = /\/\^\[(.*)+\]\/\g/g.exec(á´á´Éªá´x)[1];
module.exports = {
  name: `ban`,
  commandType: "AdminðGroups",
  description: `Add the number to banlist. You can reply to the person in group / pm or use ${ê±ÉªÉ¢É´.Mee6IX}ban <number>.`,
  async handle(ÊÉÉâÎ¹ÑÎ·Ñ, chat, á´á´á´6, ÊÉÉÉ¨Õ¼Ö, É´á´á´¡á´á´á´6) {
    if (É´á´á´¡á´á´á´6.total) {
      await ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(
          á´á´á´6.chatId,
          `â¬¡â¢â¢â¢â¢â¢â¢â¢â¢â¬¡    â¦¿ððððâ¢â¦¿    â¬¡â¢â¢â¢â¢â¢â¢â¢â¢â¬¡
â ððð6 ðð¥ððð©ð ððð£ððð£ð

ðð­ð¦ð¢ð´ð¦ ðð±ð¥ð¢ðµð¦ ðð´ðªð¯ð¨ ${á´á´Éª}update
ð°ð³ ð³ð¦ð¥ð¦ð±ð­ð°ðº!`,
          MessageType.text
        )
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
    }
    if (!á´á´á´6.isReply && typeof ÊÉÉÉ¨Õ¼Ö[0] == `undefined`) {
      ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(
          á´á´á´6.chatId,
          `Tag a message or enter a number to proceed.`,
          MessageType.text
        )
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
      return;
    }
    const reply = chat.message.extendedTextMessage;
    var contact = ``;
    if (!ÊÉÉÉ¨Õ¼Ö.length > 0) {
      contact = reply.contextInfo.participant.split(`@`)[0];
    } else {
      contact = async (ÊÉÉÉ¨Õ¼Ö, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6) => {
        var JoinIDNum = ``;
        var countryCode = ê±ÉªÉ¢É´.COUNTRY_CODE;
        if (isNaN(ÊÉÉÉ¨Õ¼Ö[0]) || ÊÉÉÉ¨Õ¼Ö[0][0] === `+`) {
          if (ÊÉÉÉ¨Õ¼Ö[0][0] === `@` || ÊÉÉÉ¨Õ¼Ö[0][0] === `+`) {
            JoinIDNum = ÊÉÉÉ¨Õ¼Ö[0].substring(1, ÊÉÉÉ¨Õ¼Ö[0].length + 1);
          } else {
            ÊÉÉâÎ¹ÑÎ·Ñ
              .sendMessage(
                á´á´á´6.chatId,
                `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
                MessageType.text
              )
              .catch((cá´ÊÊá´Ê) => {
                âÎ¹ÑÎ·Ñ.catch((cá´ÊÊá´Ê, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
              });
            return;
          }
        } else {
          JoinIDNum = ÊÉÉÉ¨Õ¼Ö[0];
        }

        if (JoinIDNum.length < 8 || JoinIDNum.length > 13) {
          ÊÉÉâÎ¹ÑÎ·Ñ
            .sendMessage(
              á´á´á´6.chatId,
              `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
              MessageType.text
            )
            .catch((cá´ÊÊá´Ê) => {
              âÎ¹ÑÎ·Ñ.catch((cá´ÊÊá´Ê, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
            });
          return;
        } else if (JoinIDNum.length === 10) {
          JoinIDNum = countryCode + JoinIDNum;
        }
        var isOnWhatsApp = await ÊÉÉâÎ¹ÑÎ·Ñ.isOnWhatsApp(JoinIDNum);
        if (isOnWhatsApp === undefined) {
          throw `NumberInvalid`;
        }
        return JoinIDNum;
      };
    }

    if (contact === á´á´á´6.owner.split(`@`)[0]) {
      ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(á´á´á´6.chatId, `Bot can not ban itself`, MessageType.text)
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
      return;
    }

    if (contact === ``) {
      ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(
          á´á´á´6.chatId,
          `Tag a message or enter a number to proceed.`,
          MessageType.text
        )
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
      return;
    }
    var JID = contact + `@s.whatsapp.net`;
    ÊÉÉâÎ¹ÑÎ·Ñ.banUser(JID, `add`);
    ÊÉÉâÎ¹ÑÎ·Ñ
      .sendMessage(
        á´á´á´6.chatId,
        `*` + contact + ` baned successfully.*`,
        MessageType.text
      )
      .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
  },
};
// ===============================================================================
// ð®á´á´á´6â¢ á´á´á´ á´É´á´á´á´ á´¡Êá´á´ê±á´á´á´ á´ê±á´ÊÊá´á´ á´¡Éªá´Ê 80+ á´á´á´á´á´É´á´ê± ê°á´Ê Êá´á´Ê á´ÊÉªá´ á´á´á´ á´É´á´ É¢Êá´á´á´-á´ê±á´É¢á´
// ===============================================================================
