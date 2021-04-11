module.exports={
    name: 'youtube',
    description: 'Comando Twitch!',
    execute(message, args){

        if(message.member.roles.cache.has('830682344028504094')){

        message.channel.send('https://www.youtube.com/channel/UCr_4_3__ks6CllpVA3-lbuA');

        }else{
            message.channel.send('Não tens permissões para usar esse comando');
        }
    }
}