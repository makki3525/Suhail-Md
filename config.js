const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://telegra.ph/file/20830114c6717fc0bcbcd.jpg";
global.website=process.env.GURL || "https://telegra.ph/file/20830114c6717fc0bcbcd.jpg" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/20830114c6717fc0bcbcd.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Makki" 


global.devs = "923257607934" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923257607934";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923257607934";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/20830114c6717fc0bcbcd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_26_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICA1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgM"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "POWERED BY Makki" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MAKKI",
  packname: process.env.PACK_NAME || "Made By",
  botname : process.env.BOT_NAME  || "Makki-MD",
  ownername:process.env.OWNER_NAME|| "Muhammad Makki",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
