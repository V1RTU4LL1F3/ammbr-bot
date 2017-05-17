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
      falaoi: ["Oi bot","ola bot","eae bot","olá bot","Oi loli","ola loli","eae loli","olá loli"],
      falaxau: ["xau bot","xau loli","vou sair","xau galera","xau pessoal","xau gente","flw galera","flw pessoal","flw gente"],
      regras: ["quais são as regras","quais sao as regras","kd as regras","cadê as regras","cade as regras"],
      temas: ["quais são os temas","quais sao os temas","temas da sala?","pode tocar pop?","pode tocar funk?","pode tocar rap?"],
      bdia: ["bom dia loli","bom dia bot","bom dia galera","bom dia pessoal","bom dia a todos","bom dia gente","bom dia povo"],
      btarde: ["boa tarde loli","boa tarde bot","boa tarde galera","boa tarde pessoal","boa tarde a todos","boa tarde gente","boa tarde povo"],
      bnoite: ["boa noite loli","boa noite bot","boa noite galera","boa noite pessoal","boa noite a todos","boa noite gente","boa noite povo"],
      carente: ["alguem aí?","alguém on?","alguem on?","ninguém on?","ninguem on?"]
}

API.on('chat', function(obj) {
     msg = obj.message.italics();

for(var i = 0; i < iabot.falaoi.length; i++){
          if(msg.indexOf(iabot.falaoi[i].italics()) > -1){
               API.sendChat("Oi, @" + obj.un + " :3");
          }
     }
  
API.on('chat', function(obj) {
     msg = obj.message.toLowerCase();
  
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
});
