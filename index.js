const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`تم تشغيل البوت باسم: ${client.user.tag}`);
});

// ملاحظة: التوكن رح نحطه في الاستضافة مش هون عشان الأمان
client.login(process.env.TOKEN);

