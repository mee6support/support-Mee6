// ===============================================================================
// ð®á´á´á´6â¢ á´á´á´ á´É´á´á´á´ á´¡Êá´á´ê±á´á´á´ á´ê±á´ÊÊá´á´ á´¡Éªá´Ê 80+ á´á´á´á´á´É´á´ê± ê°á´Ê Êá´á´Ê á´ÊÉªá´ á´á´á´ á´É´á´ É¢Êá´á´á´-á´ê±á´É¢á´
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const âÎ¹ÑÎ·Ñ = require("../../á´á´á´6/catch");
const ê±ÉªÉ¢É´ = require(`../../á´á´á´6/ê±ÉªÉ¢É´`);
var á´á´Éªá´x = new RegExp(ê±ÉªÉ¢É´.Mee6IX, "g");
var á´á´Éª = /\/\^\[(.*)+\]\/\g/g.exec(á´á´Éªá´x)[1];
module.exports = {
  name: `tagall`,
  commandType: "AdminðGroups",
  description: `command to tag evryone in a group.`,
  á´á´á´6ÊÖÊÉ: `Use this command to tag everyone in the group by either replying to a message or simply using  *${ê±ÉªÉ¢É´.Mee6IX}tagall*  command.`,
  async handle(ÊÉÉâÎ¹ÑÎ·Ñ, chat, á´á´á´6, ÊÉÉÉ¨Õ¼Ö, É´á´á´¡á´á´á´6){
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
    if (!á´á´á´6.isSenderGroupAdmin) {
      return await ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(
          á´á´á´6.chatId,
          {
            url: ê±ÉªÉ¢É´.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
â ï¸ðð¿ð¿ð¼ð¿: 
â Êá´Ê á´Êá´Êá´ É´ÉªÊÊá´!ð©

Êá´á´ á´á´É´'á´ ê±á´á´á´ á´á´ Êá´ á´á´á´ÉªÉ´..
Êá´á´ á´á´É´É´á´á´ á´ê±á´ á´á´á´á´á´É´á´ Êá´Êá´..
`,
          }
        )
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
    }
    if (!á´á´á´6.isGroup) {
      return await ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(
          á´á´á´6.chatId,
          {
            url: ê±ÉªÉ¢É´.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*â ï¸ONLY IN GROUPS!*`,
          }
        )
        .catch((cá´ÊÊá´Ê) => {
          âÎ¹ÑÎ·Ñ.catch((cá´ÊÊá´Ê, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
        });
    }
    let members = [];
    for (var i = 0; i < á´á´á´6.groupMembers.length; i++) {
      members[i] = á´á´á´6.groupMembers[i].jid;
    }
    if (á´á´á´6.isReply) {
      ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(á´á´á´6.chatId, `*Everyone!*`, MessageType.text, {
          contextInfo: {
            stanzaId: á´á´á´6.replyMessageId,
            participant: á´á´á´6.replyParticipant,
            quotedMessage: {
              conversation: á´á´á´6.replyMessage,
            },
            mentionedJid: members,
          },
        })
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
      return;
    }
    if (ÊÉÉÉ¨Õ¼Ö.length) {
      ÊÉÉâÎ¹ÑÎ·Ñ
        .sendMessage(á´á´á´6.chatId, ÊÉÉÉ¨Õ¼Ö.join(` `), MessageType.text, {
          contextInfo: {
            mentionedJid: members,
          },
        })
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
      return;
    }

    ÊÉÉâÎ¹ÑÎ·Ñ
      .sendMessage(á´á´á´6.chatId, `*Everyone!*`, MessageType.text, {
        contextInfo: {
          mentionedJid: members,
        },
      })
      .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÊÉÉâÎ¹ÑÎ·Ñ, á´á´á´6));
    return;
  },
};
// ===============================================================================
// ð®á´á´á´6â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
