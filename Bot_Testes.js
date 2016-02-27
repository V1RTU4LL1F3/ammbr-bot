var isIBotRunning;
if(!isIBotRunning) {
    if (typeof Array.prototype.indexOf !== "function") {
        Array.prototype.indexOf = function (item) {
            for(var i = 0; i < this.length; i++) {
                if (this[i] === item) {
                    return i;
                }
            }
            return -1;
        };
    };
    if(typeof String.prototype.replaceAll !== "function") {
        String.prototype.replaceAll = function(oldString, newString) {
            var theStr = this;
            var index = theStr.indexOf(oldString);
            while(index != -1) {
                theStr = theStr.replace(oldString, newString);
                index = theStr.indexOf(oldString);
            }
            return theStr;
        };
    };
    // Plug.DJ Ported API for Dubtrack.FM
    var MattB ={}
    API = {
        getDJ: function() {
            return Dubtrack.room.player.activeSong.attributes.user.attributes.username;
        },
        getMedia: function() {
            return Dubtrack.room.player.activeSong.attributes.songInfo.name;
        },
        getRole: function(User) {
            if(User.attributes.roleid != null) {
                var type = User.attributes.roleid.type.toLowerCase();
                switch(type) {
                case "dj":
                    return "DJ";
                    break;
                case "vip":
                    return "VIP";
                    break;
                case "mod":
                    return "Moderator";
                    break;
                case "manager":
                    return "Manager";
                    break;
                case "co-owner":
                    return "Co-Owner (or Owner)";
                    break;
                }
            } else {
                return "Cargo não encontrado! (provavelmente usuario padrao)";
            }
        },
        chatLog: function(msg) {
            Dubtrack.room.chat.appendItem(new Dubtrack.Model.chat({
                user: {
                    _force_updated: null,
                    userInfo: {
                        _id: "56c6f443315dda3d045afd08",
                        userid: "56c6f443315dda3d045afd08",
                        __v: 0
                    },
                    _id: "56c6f443315dda3d045afd08",
                    username: "",
                    status: 1,
                    roleid: 1,
                    dubs: 0,
                    created: 0,
                    __v: 0
                },
                message: msg,
                time: Date.now(),
                realTimeChannel: Dubtrack.room.model.get("realTimeChannel"),
                type: "chat-message"}
            ));
        },
        sendChat: function(msg) {
            while($("#chat-txt-message").val() != msg) {
                $("#chat-txt-message").val(msg);
            }
            if($("#chat-txt-message").val() == msg) {
                Dubtrack.room.chat.sendMessage();
            }
        },
        setVolume: function(value) {
            Dubtrack.playerController.setVolume(value);
        },
        CHAT: "realtime:chat-message",
        ADVANCE: "realtime:room_playlist-update",
        USER_JOIN: "realtime:user-join",
        USER_LEAVE: "realtime:user-leave",
        on: function(theEvent, theFunc) {
            Dubtrack.Events.bind(theEvent, theFunc);
        },
        off: function(theEvent, theFunc) {
            Dubtrack.Events.unbind(theEvent, theFunc);
        }
    };
    // Custom stuff
    IBot = {
        iBot: "mBot v041 (versão de testes)",
        Tools: {
            lookForUser: function(username) {
                var found = false;
                for(var i = 0; i < Dubtrack.room.users.collection.length; i++) {
                    if(username.toLowerCase() == Dubtrack.room.users.collection.at(i).attributes._user.username.toLowerCase()) {
                        found = true;
                    }
                }
                if(found) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    };
    function userJoinMsg(data) {
        API.sendChat("Bem-vindo(a) a sala AMMBR AMV/Rock/Eletro @" + data.user.username + "! :smile: Se precisar de informações, digite !ajuda");
    }
    function userLeaveMsg(data) {
        API.sendChat(":wave: Até mais @" + data.user.username + "! :wave:");
    }

    MattB.relogar = function(data){
        API.off(API.CHAT, commandHandler);
        API.off(API.USER_JOIN, userJoinMsg);
        API.off(API.USER_LEAVE, userLeaveMsg);
        API.off(API.CHAT,DialogBot);
        isIBotRunning = false;
     setTimeout (function(){
          $.getScript('https://rawgit.com/V1RTU4LL1F3/fatgasda/master/Bot.js');
     }
     , 1000);
}
    mattbot = {
     falaoi: ["oi bot","ola bot","eae bot","olá bot"],
      respondeoi: [":D Oi",":D Olá"],
      boton: ["bot on?","bot tae?","bot esta ativado?","bot ta ativado?","bot ta on?","bot ligado?"],
     toon: ["Estou aqui"],
     olapessoas: ["oi gente","yo minna","ola pessoas","ola gente","eae galera","oi galera","eae gente","ola galera","yo galera","yo gente","oi pessoas","oi pessoal","oi minna"],
     welcomebot: ["Olá, seja bem-vindo a nossa sala. Divirta-se "],
     bomdia: ["bom dia gente","bom dia galera","bom dia pessoal"], bomdiabot: [":D Bom  Dia"],
     boatarde: ["boa tarde gente","boa tarde galera","boa tarde pessoal"], boatardebot: [":D Boa  Tarde"],
     boanoite: ["boa noite gente","boa noite galera","boa noite pessoal"], boanoitebot: [":D Boa  Noite"],
     comandoslink: ["!ajuda"], clink: ["quais sao os comandos bot","link dos comandos bot","comandos da sala bot","quais são os comandos bot"],
     regraslink: ["!regras"], rlink: ["quais sao as regras bot","link das regras bot","regras da sala bot","quais são as regras bot"],
     autowootlink: ["!dubx"],
     awlink: ["link do dubx bot","como usar dubx","o que é dubx","como usa dubx"],
    }
    function DialogBot(data){
     msg = data.message.toLowerCase();
     var user = data.user.username;
 
     //Autowoot Link
     for(var i = 0; i < mattbot.awlink.length; i++){
          if(msg.indexOf(mattbot.awlink[i].toLowerCase()) > -1){
               var autowootlinkRandom = Math.floor(Math.random() * mattbot.autowootlink.length);
               API.sendChat(mattbot.autowootlink[autowootlinkRandom]);
          }
     }
     //Comandos Link
     for(var i = 0; i < mattbot.clink.length; i++){
          if(msg.indexOf(mattbot.clink[i].toLowerCase()) > -1){
               var comandoslinkRandom = Math.floor(Math.random() * mattbot.comandoslink.length);
               API.sendChat(mattbot.comandoslink[comandoslinkRandom]);
          }
     }
     //Regras Link
     for(var i = 0; i < mattbot.rlink.length; i++){
          if(msg.indexOf(mattbot.rlink[i].toLowerCase()) > -1){
               var regraslinkRandom = Math.floor(Math.random() * mattbot.regraslink.length);
               API.sendChat(mattbot.regraslink[regraslinkRandom]);
          }
     }
     //Oi
     for(var i = 0; i < mattbot.falaoi.length; i++){
          if(msg.indexOf(mattbot.falaoi[i].toLowerCase()) > -1){
               var respondeoiRandom = Math.floor(Math.random() * mattbot.respondeoi.length);
               API.sendChat(mattbot.respondeoi[respondeoiRandom] +" @"+ user +" ");
          }
     }
     //On?
     for(var i = 0; i < mattbot.boton.length; i++){
          if(msg.indexOf(mattbot.boton[i].toLowerCase()) > -1){
               var toonRandom = Math.floor(Math.random() * mattbot.toon.length);
               API.sendChat(mattbot.toon[toonRandom] +" @"+ user +" ");
          }
     }
     //ola pessoas
     for(var i = 0; i < mattbot.olapessoas.length;
     i++){
          if(msg.indexOf(mattbot.olapessoas[i].toLowerCase()) > -1){
               var welcomebotRandom = Math.floor(Math.random() * mattbot.welcomebot.length);
               API.sendChat(mattbot.welcomebot[welcomebotRandom] +" @"+ user +" !");
          }
     }
     //bomdia
     for(var i = 0; i < mattbot.bomdia.length; i++){
          if(msg.indexOf(mattbot.bomdia[i].toLowerCase()) > -1){
               var bomdiabotRandom = Math.floor(Math.random() * mattbot.bomdiabot.length);
               API.sendChat(mattbot.bomdiabot[bomdiabotRandom] +" @"+ user +" ");
          }
     }
     //boatarde
     for(var i = 0; i < mattbot.boatarde.length;
     i++){
          if(msg.indexOf(mattbot.boatarde[i].toLowerCase()) > -1){
               var boatardebotRandom = Math.floor(Math.random() * mattbot.boatardebot.length);
               API.sendChat(mattbot.boatardebot[boatardebotRandom] +" @"+ user +" ");
          }
     }
     //boanoite
     for(var i = 0; i < mattbot.boanoite.length;
     i++){
          if(msg.indexOf(mattbot.boanoite[i].toLowerCase()) > -1){
               var boanoitebotRandom = Math.floor(Math.random() * mattbot.boanoitebot.length);
               API.sendChat(mattbot.boanoitebot[boanoitebotRandom] +" @"+ user +" ");
          }
     }
     
    }
    function cmdLig(data) {
    var msg = data.message;
    var user = data.user.username;
    if (msg.indexOf("!ligar") == 0) {
            if(admlist.indexOf(user) > -1) {
            if(MattB.ligar == false) {
            startUp();
            } else { API.sendChat("O Bot já está ligado!");
            }
            } else { API.sendChat("@" + user + " Você não tem permissão!");
            }
        }
    }
    
    function commandHandler(data) {
        var msg = data.message;
        var user = data.user.username;
        var userId = data.user._id;


        if(msg.substring(0, 1) == "!") {
            var cmd = msg.substring(1);
            if(cmd.startsWith("bolacha")) {
                var UN = cmd.substring(9);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " da uma bolacha para @" + UN + "!"); 
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat(":cookie: EU AMO BOLACHA! =) :cookie:");
                }
            } else {
            
            var cmd = msg.substring(1);
            if(cmd.startsWith("vodka")) {
                var UN = cmd.substring(7);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " da uma garrafa de vodka para @" + UN + "!"); 
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat(":cocktail: EU AMO VODKA! =) :cocktail:");
                }
            } else {
 
             var cmd = msg.substring(1);
            if(cmd.startsWith("kickar")) {
                if(admlist.indexOf(user) > -1) {
                var UN = cmd.substring(8);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " kickando @" + UN + "!"); 
                        API.sendChat("/kick @"+UN);
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat("kickar @user");
                }
                } else { API.sendChat("@" + user + " Você não tem permissão!");}
            } else {
             var cmd = msg.substring(1);
            if(cmd.startsWith("banir")) {
                if(admlist.indexOf(user) > -1) {
                var UN = cmd.substring(7);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " banindo @" + UN + "!"); 
                        API.sendChat("/ban @"+UN);
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat("banir @user");
                }
                } else { API.sendChat("@" + user + " Você não tem permissão!");}
            } else {                
             /* var cmd = msg.substring(1);
            if(cmd.startsWith("desbanir")) {
                if(admlist.indexOf(user) > -1) {
                var UN = cmd.substring(10);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " desbanindo @" + UN + "!"); 
                        API.sendChat("/unban @"+UN);
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat("desbanir @user");
                }
                } else { API.sendChat("@" + user + " Você não tem permissão!");}
            } else {*/
             var cmd = msg.substring(1);
            if(cmd.startsWith("mutar")) {
                if(admlist.indexOf(user) > -1) {
                var UN = cmd.substring(7);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " mutando @" + UN + "!"); 
                        API.sendChat("/mute @"+UN);
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat("mutar @user");
                }
                } else { API.sendChat("@" + user + " Você não tem permissão!");}
            } else {   
             var cmd = msg.substring(1);
            if(cmd.startsWith("desmutar")) {
                if(admlist.indexOf(user) > -1) {
                var UN = cmd.substring(10);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " desmutando @" + UN + "!"); 
                        API.sendChat("/unmute @"+UN);
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat("desmutar @user");
                }
                } else { API.sendChat("@" + user + " Você não tem permissão!");}
            } else {
            var cmd = msg.substring(1);
            if(cmd.startsWith("chute")) {
                var UN = cmd.substring(7);
                if(UN != "") {
                    if(IBot.Tools.lookForUser(UN)) {
                        API.sendChat(" @" + user + " da um chute na cara de @" + UN + "!"); 
                    } else {
                        API.sendChat(":x: Usuario nao encontrado! :x:");
                    }
                } else {
                    API.sendChat(":punch: EU AMO BRIGAS! =) :punch:");
                }
            } else 
            
                switch (cmd) {
                case "desligar":
                    if(admlist.indexOf(user) > -1) {
        		API.off(API.CHAT, commandHandler);
        		API.off(API.USER_JOIN, userJoinMsg);
        		API.off(API.USER_LEAVE, userLeaveMsg);
        		API.off(API.CHAT,DialogBot);
        		MattB.ligar = false; 
        		isIBotRunning = false;
                 	API.sendChat(":no_entry_sign: @" + user +",  Desligado.");
                    } else { API.sendChat("@" + user + " Você não tem permissão!");
                    }
                    break;
                case "ajuda":
                    API.sendChat(":large_blue_circle: @" + user +", "+IBot.iBot + " comandos de usuários: !ajuda(!help), !musica, !dj, !regras, !temas, !twitter, !fb, !dubx");
                    break;
                case "admcmds":
                    if(admlist.indexOf(user) > -1) {
                    API.sendChat(":large_blue_circle: @" + user +", comandos de admins !kickar @user, !banir @user, !mutar @user, !desmutar @user, !desligar, !ligar, !relogar, !pular, !pausarfila, !continuarfila");
                    } else { API.sendChat("@" + user + " Você não tem permissão!");}
                    break;
                case "help":
                    API.sendChat(":red_circle: @" + user +", "+IBot.iBot + " user commands: !help, !dj, !song, !rules, !themes, !twitter, !fb, !dubx");
                    break;
                case "dj":
                    API.sendChat(":red_circle:DJ: @" + API.getDJ() + "!"); //Se não tiver DJ tocando, não use o comando...
                    break;
                case "musica":
                    API.sendChat(":large_blue_circle: @" + user +", Musica atual: " + API.getMedia() + "!"); //Se não tiver DJ tocando, não use o comando...
                    break;
                case "song":
                    API.sendChat(":red_circle: @" + user +", Current Song: " + API.getMedia() + "!"); //Se não tiver DJ tocando, não use o comando...
                    break;
                case "dubx":
                    API.sendChat(":red_circle: @" + user +", Extensao para Dubtrack.FM(Auto vote): DubX https://dubx.net");
                    break;
                case "fb":
                    API.sendChat(":large_blue_circle: @" + user +", Entre no nosso grupo: https://www.facebook.com/groups/ammbr/");
                    break;
                case "twitter":
                    API.sendChat(":red_circle: @" + user +", Siga-nos no twitter: https://twitter.com/Anime_MusicBR");
                    break;
                case "regras":
                    API.sendChat(":large_blue_circle: @" + user +", aqui estão as regras da sala: https://goo.gl/fxzBif");
                    break;
                case "rules":
                    API.sendChat(":large_blue_circle: @" + user +", here are the rules of the room: https://goo.gl/7cDLJC");
                    break;
                case "temas":
                    API.sendChat(":red_circle: @" + user +", Temas permitidos: http://i.imgur.com/jqCjGXN.png ");
                    break;
                case "themes":
                    API.sendChat(":red_circle: @" + user +", Themes allowed: http://i.imgur.com/jqCjGXN.png ");
                    break;
                case "pausarfila":
                    if(admlist.indexOf(user) > -1) {
                    pauseQueue();
                    } else { API.sendChat("@" + user + " Você não tem permissão!");}
                    break;
                case "continuarfila":
                    if(admlist.indexOf(user) > -1) {
                    resumeQueue();
                    } else { API.sendChat("@" + user + " Você não tem permissão!");}
                    break;
                case "pular":
                    if(admlist.indexOf(user) > -1) {
                    $(".skip-el").trigger("click");
                    } else { API.sendChat("@" + user + " Você não tem permissão!");}
                    break;                    
                case "relogar":
                    if(admlist.indexOf(user) > -1) {
                    API.sendChat(" @" + user +", Relogando.");
                    MattB.relogar();
                    } else { API.sendChat("@" + user + " Você não tem permissão!");}
                    break;
                default:
                        API.sendChat(":x: Comando: "+cmd+" inválido!");
                        break;
            }
            }
            }
            }
            }
            }
           // }
            }
        }
    }

    function pauseQueue(){ $(".display-browser").trigger("click"); setTimeout(function(){$(".pause-queue").trigger("click");},5000); setTimeout(function(){$(".close-browser").trigger("click");},1000) }
    function resumeQueue(){ $(".display-browser").trigger("click"); setTimeout(function(){$(".pause-queue").trigger("click");},5000); setTimeout(function(){$(".close-browser").trigger("click");},1000) }   
    
    function nextSongMsg() {
        API.sendChat(":musical_note: Tocando agora: " + API.getMedia() + "! DJ: " + API.getDJ() + ":musical_note:");
    }
    API.on(API.CHAT, cmdLig);
    function connectAPI() {
        API.on(API.CHAT, commandHandler);
        API.on(API.USER_JOIN, userJoinMsg);
        API.on(API.USER_LEAVE, userLeaveMsg);
        API.on(API.CHAT, DialogBot);
 
        /*
        * Leaving commented until I can fix the double sending problem
        * API.on(API.ADVANCE, nextSongMsg);
        */
    }
    // Just like iWoot, CONNECT EVERYTHING!
    function startUp() {
        connectAPI();
        isIBotRunning = true;
        MattB.ligar = true; 
        var admins = $.getScript("https://rawgit.com/V1RTU4LL1F3/fatgasda/master/adminlist.js");
        $("#chat-txt-message").attr("maxlength", "99999999999999999999");
        API.sendChat(":white_check_mark: " + IBot.iBot + " Ativado! :white_check_mark:");
    }
    startUp();
} else {
    Dubtrack.helpers.displayError("Erro!", "mBot ja esta ativo!");
}
