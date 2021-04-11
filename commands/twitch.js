module.exports={
    name: 'twitch',
    description: 'Comando Twitch!',
    execute(message, args){

        if(message.member.roles.cache.has('830682344028504094')){

        message.channel.send('https://twitch.tv/p3dr0m1gu3l');

        }else{
            message.channel.send('Não tens permissões para usar esse comando');
        }
    }
}