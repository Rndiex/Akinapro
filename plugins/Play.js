const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const LOAD_ING = "*Result found...*"
const Config = require('../config');
const axios = require('axios')
const Axios = require('axios')


Asena.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: 'play song' , dontAddCommandList: true }, async (message, match) => {
	
	await message.client.sendMessage(message.jid, '_*Im Searching your song*_  👸🏼 *➾* 🔎' , MessageType.text, { quoted: message.data });
	
	const {data} = await axios(`https://zenzapi.xyz/api/play/playmp3?query=${match[1]}&apikey=whitedevil-terrorboy`)
	
        const { status, result } = data
	
	var img = await Axios.get(`${result.thumb}`, {responseType: 'arraybuffer'})
	
        if(!status) return await message.sendMessage('*NO RESULT FOUND*')
	
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let img = '```'
        msg +=  `TITLE :${result.title}\n\n`        
        msg +=  `VIEWS :${result.views}\n\n`
        msg +=  `CHANNEL :${result.channel}\n\n`        
        msg += '```'
        return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
        });
