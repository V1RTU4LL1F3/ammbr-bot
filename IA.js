                  //Não diferencia M de m
/* iabot = {
     falaoi: ["Oi bot","ola bot","eae bot","olá bot"],
}

API.on('chat', function(obj) {
     msg = obj.message.toLowerCase();

for(var i = 0; i < iabot.falaoi.length; i++){
          if(msg.indexOf(iabot.falaoi[i].toLowerCase()) > -1){
               API.sendChat("Oi @" + obj.un + "");
          }
     }
}); */

                  //Diferencia M de m
/* iabot = {
     falaoi: ["Oi bot","ola bot","eae bot","olá bot"],
}

API.on('chat', function(obj) {
     msg = obj.message.italics();

for(var i = 0; i < iabot.falaoi.length; i++){
          if(msg.indexOf(iabot.falaoi[i].italics()) > -1){
               API.sendChat("Oi @" + obj.un + "");
          }
     }
}); */

                           // Random
// var autowootlinkRandom = Math.floor(Math.random() * iabot.autowootlink.length);
// API.sendChat(iabot.autowootlink[autowootlinkRandom] +" @"+ obj.un +" ");


iabot = {
      falaoi: ["Oi bot","Oi loli","Oi Loli","Oi Bot","Oi pessoal","Oi gente"],
      falaoi2: ["ola bot","eae bot","olá bot","ola loli","eae loli","olá loli","eae galera","eae pessoal"],
      falaxau: ["xau bot","xau loli","vou sair","xau galera","xau pessoal","xau gente","flw galera","flw pessoal","flw gente"],
      regras: ["quais são as regras","quais sao as regras","kd as regras","cadê as regras","cade as regras", "regras da sala"],
      temas: ["quais são os temas","quais sao os temas","kd os temas","cadê os temas","cade os temas","pode tocar oque?","pode tocar o que?","temas da sala","pode tocar pop?","pode tocar funk?","pode tocar rap?"],
      bdia: ["bom dia loli","bom dia bot","bom dia galera","bom dia pessoal","bom dia a todos","bom dia gente","bom dia povo"],
      btarde: ["boa tarde loli","boa tarde bot","boa tarde galera","boa tarde pessoal","boa tarde a todos","boa tarde gente","boa tarde povo"],
      bnoite: ["boa noite loli","boa noite bot","boa noite galera","boa noite pessoal","boa noite a todos","boa noite gente","boa noite povo"],
      carente: ["alguém aí?","alguem aí?","alguém on?","alguem on?","ninguém on?","ninguem on?"],
      carenterandom: ["@Loli Bot não"],
      carenterandomresp: ["ata","então continua aí falando sozinho(a) :rage: ","ok :("],
}

API.on('chat', function(obj) {
     msg = obj.message.italics();

for(var i = 0; i < iabot.falaoi.length; i++){
          if(msg.indexOf(iabot.falaoi[i].italics()) > -1){
               API.sendChat("Oi, @" + obj.un + " :3");
          }
     }
});

API.on('chat', function(obj) {
     msg = obj.message.toLowerCase();

for(var i = 0; i < iabot.falaoi2.length; i++){
          if(msg.indexOf(iabot.falaoi2[i].toLowerCase()) > -1){
               API.sendChat("Oi, @" + obj.un + " :3");
          }
     }

for(var i = 0; i < iabot.falaxau.length; i++){
          if(msg.indexOf(iabot.falaxau[i].toLowerCase()) > -1){
               API.sendChat("Tchauzinho, @" + obj.un + ", volte sempre :3");
          }
     }

for(var i = 0; i < iabot.regras.length; i++){
          if(msg.indexOf(iabot.regras[i].toLowerCase()) > -1){
               API.sendChat("Nossas regras? aqui estão elas, @" + obj.un + " :D https://goo.gl/O5nQJ0");
          }
     }

for(var i = 0; i < iabot.temas.length; i++){
          if(msg.indexOf(iabot.temas[i].toLowerCase()) > -1){
               API.sendChat("Aqui estão os temas permitidos, @" + obj.un + " ^^ http://i.imgur.com/jqCjGXN.png");
          }
     }

for(var i = 0; i < iabot.bdia.length; i++){
          if(msg.indexOf(iabot.bdia[i].toLowerCase()) > -1){
               API.sendChat("Bom dia, @" + obj.un + " :3");
          }
     }

for(var i = 0; i < iabot.btarde.length; i++){
          if(msg.indexOf(iabot.btarde[i].toLowerCase()) > -1){
               API.sendChat("Boa tarde, @" + obj.un + " :3");
          }
     }

for(var i = 0; i < iabot.bnoite.length; i++){
          if(msg.indexOf(iabot.bnoite[i].toLowerCase()) > -1){
               API.sendChat("Boa noite, @" + obj.un + " :3");
          }
     }

for(var i = 0; i < iabot.carente.length; i++){
          if(msg.indexOf(iabot.carente[i].toLowerCase()) > -1){
               API.sendChat("Tem eu, @" + obj.un + ", serve? :3");
          }
     }

for(var i = 0; i < iabot.carenterandom.length; i++){
          if(msg.indexOf(iabot.carenterandom[i].toLowerCase()) > -1){
               var carenteRandom = Math.floor(Math.random() * iabot.carenterandomresp.length);
               API.sendChat(iabot.carenterandomresp[carenteRandom] +" @"+ obj.un +" ");
          }
     }

});

            // MEMES

API.on('chat', function(obj) {
  
                //PAPACO
  
  
    if(obj.message.indexOf("Ei seu bunda mole") != -1){
            API.sendChat("Falou comigo?");
        }
    if(obj.message.indexOf("Não gracinha, falei com a puta que te pariu") != -1){
            API.sendChat("Ainda bem, até um outro dia");
        }
    if(obj.message.indexOf("Não gracinha falei com a puta que te pariu") != -1){
            API.sendChat("Ainda bem, até um outro dia");
        }
    if(obj.message.indexOf("Um momento, amigo") != -1){
            API.sendChat("Fala oque você quer de uma vez, caralho");
        }
    if(obj.message.indexOf("Um momento amigo") != -1){
            API.sendChat("Fala oque você quer de uma vez, caralho");
        }
    if(obj.message.indexOf("Oque levas nesse caixão") != -1){
            API.sendChat("Um monte de bosta!");
        }
    if(obj.message.indexOf("Que levas nesse caixão") != -1){
            API.sendChat("Um monte de bosta!");
        }
    if(obj.message.indexOf("E quem foi o cagão") != -1){
            API.sendChat("Aposto que não foi o cu de sua mãe");
        }
    if(obj.message.indexOf("Você fala demais, amigo") != -1){
            API.sendChat("Pow pow pow pei pei");
        }
    if(obj.message.indexOf("Você fala demais amigo") != -1){
            API.sendChat("Pow pow pow pei pei");
        }
});
