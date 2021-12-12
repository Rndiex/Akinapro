/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+919895828468
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'pastpapers', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Chemistry', description: "*Advanced Level Chemistry II 2012*\n*📚COMMAND :* ```.chem2```\n\n*Advanced Level Chemistry MCQ 2013 *\n*📚COMMAND :* ```.chem3```\n\n*Advanced Level Chemistry II 2013*\n*📚COMMAND :* ```.chem5``` \n\n*Advanced Level Chemistry II 2014* \n*📚COMMAND :* ```.chem7```\n\n*Advanced Level Chemistry MCQ 2014*\n*📚COMMAND :* ```.chem6``` \n\n*Advanced Level Chemistry II 2015* \n*📚COMMAND :* ```.chem9```\n\n*Advanced Level Chemistry MCQ 2015*\nA*📚COMMAND :* ```.chem8``` \n\n*Advanced Level Chemistry MCQ 2017*\n*📚COMMAND :* ```.chem12``` \n\n*Advanced Level Chemistry II 2017*\n*📚COMMAND :* ```.chem13``` n\n*Advanced Level Chemistry MCQ 2018*\n*📚COMMAND :* ```.chem14``` \n\n*Advanced Level Chemistry II 2018*\n*📚COMMAND :* ```.chem15```\n\n*Advanced Level Chemistry I 2019* \n**📚COMMAND :* ```.chem16```\n\n*Advanced Level Chemistry II 2019*\n*📚COMMAND :* ```.chem17```\n\n*Advanced Level Chemistry I 2020*\n*📚COMMAND :* ```.chem1```\n\n *Advanced Level Chemistry II 2020* \n*📚COMMAND :* ```.chem18```\n\n", rowId:" rowid1"},
        {title: 'Physics', description: "#\n\n ", rowId:"rowid2"},
        {title: 'Maths', description: "#\n\n ", rowId:"rowid3"},
        {title: 'Pesuru', description: "• *පේසුරු | රසායන විද්‍යාව*\n\n• 1980 - 2018\n\n➰වකිරණශීලීතාව\n➰ආවර්තිතාව\n➰බන්ධන \n➰ඔක්සිහරණ / ඔක්සිකරණ\n➰වායු\n➰ශක්ති විද්‍යාව\n\n• *රචනා - පිළිතුරු*\n\n*📚COMMAND : pc1\n\n_______________\n\n• *පේසුරු | රසායන විද්‍යාව*\n\n• 1980 - 2018\n\n➰S, P, D ගොනු\n➰වශ්ලේෂණ රසායන විද්‍යාව \n➰ඇනායන කැටායන හඳුනාගැනීම\n\n• *රචනා - පිළිතුරු*\n\n*📚COMMAND : pc2\n\n_______________\n\n• *පේසුරු | රසායන විද්‍යාව*\n\n• 1980 - 2018\n\n➰ රසායනික සමතුලිතතාවය\n➰ අයනික සමතුලිතතාවය\n➰ කලාප සමතුලිතතාවය\n➰ ඉලෙක්ට්‍රෝඩ සමතුලිතතාවය\n➰ හමාලා ආසවනය\n\n• *රචනා - පිළිතුරු*\n\n*📚COMMAND : pc3\n\n_______________\n\n• *පේසුරු | රසායන විද්‍යාව*\n\n• 1980 - 2018\n\n➰ කාබනික රසායනය\n➰ චාලක රසායනය\n➰ පරිසර රසායනය\n➰ කර්මාන්ත රසායනය\n\n• *රචනා - පිළිතුරු*\n\n*📚COMMAND : pc4\n\n_______________", rowId:"rowid2"},
       ]
       
       const sections = [{title: "Akina ❤️", rows: rows}]
       
       const button = {
        buttonText: '📚CLICK HERE',
        description: '*📄ඔබට අවශ්‍ය විෂය Chemistry paper තෝරන්න*\n\n Touch The ✅ SELECTE Button Below And Select As Needed',
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
