const { Client } = require('discord.js');
const config = require('../config.json');

const client = new Client();

client.login(config.token);

client.on('ready', () => {
    config.commands.forEach(command => {
        const channel = client.channels.get(command.channelID);
        if(!channel || !command.active) return;
        setInterval(() => {
            try {
                if(command.mine.active){
                    if(command.mine.sell.count < 1  && command.mine.sell.active){
                        channel.send(command.mine.sell.content).catch(() => {});
                        command.mine.sell.count = 310000;
                    }else if(command.mine.hunt.count < 1 && command.mine.hunt.active){
                        channel.send(command.mine.hunt.content).catch(() => {});
                        command.mine.hunt.count = 310000;
                    }else if(command.mine.fish.count < 1 && command.mine.fish.active){
                        channel.send(command.mine.fish.content).catch(() => {});
                        command.mine.fish.count = 310000;
                    }
                }
                if(command.drank.active){
                    if(command.drank.beg.count < 1 && command.drank.beg.active){
                        channel.send(command.drank.beg.content).catch(() => {});
                        command.drank.beg.count = 50000;
                    }else if(command.drank.hunt.count < 1 && command.drank.hunt.active){
                        channel.send(command.drank.hunt.content).catch(() => {});
                        command.drank.hunt.count = 65000;
                    }else if(command.drank.memes.count < 1 && command.drank.memes.active){
                        channel.send(command.drank.memes.content).catch(() => {});
                        channel.send(command.drank.memes.content2).catch(() => {});
                        command.drank.memes.count = 65000;
                    }else if(command.drank.fish.count < 1 && command.drank.fish.active){
                        channel.send(command.drank.fish.content).catch(() => {});
                        command.drank.fish.count = 50000;
                    }
                }
                if(command.brawlbox.active){
                    if(command.brawlbox.mb.count > 0 && command.brawlbox.mb.active) {
                        channel.send(command.brawlbox.mb.content).catch(() => {});
                        command.brawlbox.mb.count--
                    }else if(command.brawlbox.bb.count > 0 && command.brawlbox.bb.active) {
                        channel.send(command.brawlbox.bb.content).catch(() => {});
                        command.brawlbox.bb.count--
                    }else {
                        channel.send(command.brawlbox.b.content).catch(() => {});
                    }
                }
                
                command.mine.sell.count -= 2500;
                command.mine.hunt.count -= 2500;
                command.mine.fish.count -= 2500;
                command.drank.beg.count -= 2500;
                command.drank.fish.count -= 2500;
                command.drank.memes.count -= 2500;
                command.drank.hunt.count -= 2500;
                
            } catch {};
        }, command.interval);

    }); 
});