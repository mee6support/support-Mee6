// ===============================================================================
// ð®á´á´á´6â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
const ê±ÉªÉ¢É´ = require("./ê±ÉªÉ¢É´");
var ÆÊÉ®ÖÊÉ¢ÆÊÇ = require("./á´á´á´6ÆÊÇ");
const Kolor = require("chalk");
// ===============================================================================
// ð®á´á´á´6â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
exports.resolve = function (messageInstance, ÊÉÉâÎ¹ÑÎ·Ñ, groupMetadata) {
  var á´á´á´6 = new ÆÊÉ®ÖÊÉ¢ÆÊÇ();
  var prefix = ê±ÉªÉ¢É´.Mee6IX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = ê±ÉªÉ¢É´.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYÎ£Ð¯Ð¯) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYÎ£Ð¯Ð¯));
  }
  á´á´á´6.chatId = messageInstance.key.remoteJid || "";
  á´á´á´6.fromMe = messageInstance.key.fromMe;
  á´á´á´6.owner = ÊÉÉâÎ¹ÑÎ·Ñ.user.jid || "";
  á´á´á´6.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  á´á´á´6.type =
    á´á´á´6.mimeType === "imageMessage"
      ? "image"
      : á´á´á´6.mimeType === "videoMessage"
      ? "video"
      : á´á´á´6.mimeType === "conversation" ||
        á´á´á´6.mimeType == "extendedTextMessage"
      ? "text"
      : á´á´á´6.mimeType === "audioMessage"
      ? "audio"
      : á´á´á´6.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  á´á´á´6.isReply =
    á´á´á´6.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  á´á´á´6.replyMessageId =
    á´á´á´6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  á´á´á´6.replyMessage =
    á´á´á´6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  á´á´á´6.replyParticipant =
    á´á´á´6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  á´á´á´6.body =
    á´á´á´6.mimeType === "conversation"
      ? messageInstance.message.conversation
      : á´á´á´6.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : á´á´á´6.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : á´á´á´6.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : á´á´á´6.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  á´á´á´6.isCmd = prefixRegex.test(á´á´á´6.body);
  á´á´á´6.commandName = á´á´á´6.isCmd
    ? á´á´á´6.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  á´á´á´6.isImage = á´á´á´6.type === "image";
  á´á´á´6.isReplyImage = á´á´á´6.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  á´á´á´6.imageCaption = á´á´á´6.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  á´á´á´6.isGIF =
    á´á´á´6.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  á´á´á´6.isReplyGIF = á´á´á´6.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  á´á´á´6.isSticker = á´á´á´6.type === "sticker";
  á´á´á´6.isReplySticker = á´á´á´6.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  á´á´á´6.isReplyAnimatedSticker = á´á´á´6.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  á´á´á´6.isVideo =
    á´á´á´6.type === "video" && !messageInstance.message.videoMessage.gifPlayback;
  á´á´á´6.isReplyVideo = á´á´á´6.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  á´á´á´6.isAudio = á´á´á´6.type === "audio";
  á´á´á´6.isReplyAudio = á´á´á´6.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  á´á´á´6.logGroup = ÊÉÉâÎ¹ÑÎ·Ñ.user.jid || "";
  á´á´á´6.isGroup = á´á´á´6.chatId.endsWith("@g.us");
  á´á´á´6.isPm = !á´á´á´6.isGroup;
  á´á´á´6.sender =
    á´á´á´6.isGroup && messageInstance.message && á´á´á´6.fromMe
      ? á´á´á´6.owner
      : á´á´á´6.isGroup && messageInstance.message
      ? messageInstance.participant
      : !á´á´á´6.isGroup
      ? á´á´á´6.chatId
      : "";
  á´á´á´6.groupName = á´á´á´6.isGroup ? groupMetadata.subject : "";
  á´á´á´6.groupMembers = á´á´á´6.isGroup ? groupMetadata.participants : "";
  á´á´á´6.groupAdmins = á´á´á´6.isGroup ? getGroupAdmins(á´á´á´6.groupMembers) : "";
  á´á´á´6.groupId = á´á´á´6.isGroup ? groupMetadata.id : "";
  á´á´á´6.isSenderSUDO = SUDOstring.includes(
    á´á´á´6.sender.substring(0, á´á´á´6.sender.indexOf("@"))
  );
  á´á´á´6.isBotGroupAdmin = á´á´á´6.isGroup
    ? á´á´á´6.groupAdmins.includes(á´á´á´6.owner)
    : false;
  á´á´á´6.isSenderGroupAdmin = á´á´á´6.isGroup
    ? á´á´á´6.groupAdmins.includes(á´á´á´6.sender)
    : false;

  return á´á´á´6;
};
// ===============================================================================
// ð®á´á´á´6â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ===============================================================================
// ð®á´á´á´6â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
