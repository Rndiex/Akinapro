const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const LOAD_ING = "*Result found...*"
const Config = require('../config');
const axios = require('axios')
const Axios = require('axios')


Asena.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: 'play song' , dontAddCommandList: true }, async (message, match) => {
	
	await message.client.sendMessage(message.jid, '*Im Searching your song  👸🏼 ➾ 🔎*' , MessageType.text, { quoted: message.data });
	
	const {data} = await axios(`https://zenzapi.xyz/api/downloader/ytmp3?query=${match[1]}&apikey=5d5d06e44d62`)
	
        const { status, result } = data
	
	var img = await Axios.get(`${result.thumb}`, {responseType: 'arraybuffer'})
	
        if(!status) return await message.sendMessage('*NO RESULT FOUND*')
	
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `CHNNEL :${result.channel}\n\n`
        msg +=  `PUBLISHED :${result.published}\n\n` 
        msg +=  `VIEWS :${result.views}\n\n`       
        msg += '```'
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg })
        });