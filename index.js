require('dotenv').config();
const { Bot, GrammyError, HttpError } = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY);

bot.api.setMyCommands([
    {
        command: 'rules',
        description: '👾Правила чата',
    },
    {
        command: 'bot',
        description: '🤖Бот-поддержка',
    },
    {
        command: 'admins',
        description: '🌐Администрация чата',
    },
    {
        command: 'coders',
        description: '👨‍💻Разработчики бота',
    }
]);

bot.command('start', async (ctx) => {
    await ctx.reply('Спасибо за добавление в группу! Данный РП-Бот создан специально для чата "Сборище фанатов Павла". \n\nПриятного использования!👾 \n\nПравила чата: https://telegra.ph/Pravila-CHata-Pavla-Durova-09-21 \n\n✍️telegram channel coder\'а: @patientcoder')
})

bot.command('coders', async (ctx) => {
    await ctx.reply('👨‍💻Разработчики бота: \n@heardyy \n@Kan_ekoo \n\n✍️telegram channel coder\'а: @patientcoder')
})

bot.command('rules', async (ctx) => {
    await ctx.reply('👾Правила чата: https://telegra.ph/Pravila-chata-Pavla-09-22!')
})

bot.command('admins', async (ctx) => {
    await ctx.reply('🌐Администрация чата: \n@Kan_ekoo \n@StintlerGojo \n@ajerqd \n@StintlerGojo \n@heardyy \n@itssssgoodman \n@OMN1XOR')
})

bot.command('bot', async (ctx) => {
    await ctx.reply('🤖Бот-поддержка нашего чата: @SupKaneBot \n\nВ данном боте вы можете написать в тех. поддержку, подать апелляцию и т.д. \n\n✍️telegram channel coder\'а: @patientcoder')
})

bot.hears('!правила', async (ctx) => {
    await ctx.reply('👾Правила чата: https://telegra.ph/Pravila-chata-Pavla-09-22', {
        reply_parameters: { message_id: ctx.msg.message_id },
      });
})
bot.hears('!админы', async (ctx) => {
    await ctx.reply('🌐Администрация чата: \n@Kan_ekoo \n@ajerqd \n@StintlerGojo \n@heardyy \n@itssssgoodman \n@OMN1XOR', {
        reply_parameters: { message_id: ctx.msg.message_id },
      });
})
bot.hears('!бот', async (ctx) => {
    await ctx.reply('🤖Бот-поддержка нашего чата: @SupKaneBot \n\nВ данном боте вы можете написать в тех. поддержку, подать апелляцию и т.д. \n\n✍️telegram channel coder\'а: @patientcoder', {
        reply_parameters: { message_id: ctx.msg.message_id },
      });
})
bot.hears('!помощь', async (ctx) => {
    await ctx.reply('🤖Команды бота: \n!помощь - команды бота\n/admins - администрация чата\n/bot - бот-поддержка\n/rules - правила чата\n\nРП-команды: \n/e (юзернейм) - укусить \n/n (юзернейм) - погладить \n/k (юзернейм) - поцеловать', {
        reply_parameters: { message_id: ctx.msg.message_id },
      });
})
bot.hears('!кодеры', async (ctx) => {
    await ctx.reply('👨‍💻Разработчики бота: \n@heardyy \n@Kan_ekoo \n\n✍️telegram channel coder\'а: @patientcoder', {
        reply_parameters: { message_id: ctx.msg.message_id },
      });
})

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}`);
    const e = err.error;

    if (e instanceof GrammyError) {
    console.error("Error in request:", e.description) 
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
})

bot.command("n", async (ctx) => {
    if (!ctx.message.text.split(" ")[1]) {
        return;
    }
    let username = ctx.message.text.split(" ")[1];
    await ctx.reply(`${ctx.from.username} <b>погладил(а) по голове</b> ${username}🥰`, {
        reply_parameters: {
            message_id: ctx.message.message_id
        }

    })
})
bot.command("k", async (ctx) => {
    if (!ctx.message.text.split(" ")[1]) {
        return;
    }
    let username = ctx.message.text.split(" ")[1];
    await ctx.reply(`${ctx.from.username} поцеловал(а) в щечку ${username}🥰`, {
        reply_parameters: {
            message_id: ctx.message.message_id
        }
    })
})
bot.command("e", async (ctx) => {
    if (!ctx.message.text.split(" ")[1]) {
        return;
    }
    let username = ctx.message.text.split(" ")[1];
    await ctx.reply(`${ctx.from.username} укусила(а) за пальчик ${username}🥰`, {
        reply_parameters: {
            message_id: ctx.message.message_id
        }
    })
})

bot.start();