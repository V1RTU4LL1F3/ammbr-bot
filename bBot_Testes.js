(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "V1RTU4LL1F3";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.
         bot.commands.thorCommand = {
              command: 'thor',
              rank: 'user',
              type: 'exact',
              functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                      if (basicBot.settings.thorCommand){
                        var id = chat.uid,
                              isDj = API.getDJ().id == id ? true : false,
                              from = chat.un,
                              djlist = API.getWaitList(),
                              inDjList = false,
                              oldTime = 0,
                              usedThor = false,
                              indexArrUsedThor,
                              thorCd = false,
                              timeInMinutes = 0,
                              worthyAlg = Math.floor(Math.random() ),
                              worthy = worthyAlg =< 25 ? true : false;

                          for (var i = 0; i < djlist.length; i++) {
                              if (djlist[i].id == id)
                                  inDjList = true;
                          }

                          if (inDjList) {
                              for (var i = 0; i < basicBot.room.usersUsedThor.length; i++) {
                                  if (basicBot.room.usersUsedThor[i].id == id) {
                                      oldTime = basicBot.room.usersUsedThor[i].time;
                                      usedThor = true;
                                      indexArrUsedThor = i;
                                  }
                              }

                              if (usedThor) {
                                  timeInMinutes = (basicBot.settings.thorCooldown + 1) - (Math.floor((oldTime - Date.now()) * Math.pow(10, -5)) * -1);
                                  thorCd = timeInMinutes > 0 ? true : false;
                                  if (thorCd == false)
                                      basicBot.room.usersUsedThor.splice(indexArrUsedThor, 1);
                              }

                              if (thorCd == false || usedThor == false) {
                                  var user = {id: id, time: Date.now()};
                                  basicBot.room.usersUsedThor.push(user);
                              }
                          }

                          if (!inDjList) {
                              return API.sendChat(subChat(basicBot.chat.thorNotClose, {name: from}));
                          } else if (thorCd) {
                              return API.sendChat(subChat(basicBot.chat.thorcd, {name: from, time: timeInMinutes}));
                          }

                          if (worthy) {
                            if (API.getWaitListPosition(id) != 0)
                            basicBot.userUtilities.moveUser(id, 1, false);
                            API.sendChat(subChat(basicBot.chat.thorWorthy, {name: from}));
                          } else {
                            if (API.getWaitListPosition(id) != djlist.length - 1)
                            basicBot.userUtilities.moveUser(id, djlist.length, false);
                            API.sendChat(subChat(basicBot.chat.thorNotWorthy, {name: from}));
                          }
                        }
                    }
                }
            };
        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "AMMBR Bot",
      language: "portuguese",
      chatLink: "https://rawgit.com/V1RTU4LL1F3/fatgasda/master/bBotLang",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 20, // 0-100
      startupEmoji: true, // true or false
      autowoot: false,
      autoskip: true,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 60,
      bouncerPlus: false,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: false,
      voteSkipLimit: 10,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: false,
      commandCooldown: 5,
      usercommandsEnabled: true,
      skipPosition: 1,
      skipReasons: [
      ["tema", "seu vídeo não se encaixa nos temas da sala, digite !theme para ver os temas permitidos "],
      ["historico", "seu vídeo já está no histórico da sala. "],
      ["indisponivel", "seu vídeo está indisponivel. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 10,
      motd: "Nenhuma mensagem foi adicionada",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: "http://goo.gl/i7JUIX" ,
      themeLink: "http://i.imgur.com/jqCjGXN.png" ,
      fbLink: "http://goo.gl/fmAu02" ,
      youtubeLink: null,
      website: null,
      intervalMessages: ["Não esqueça de dar uma olhada nas regras da sala antes de entrar na fila de DJs! ➲ http://goo.gl/i7JUIX", "Venha fazer parte do nosso grupo no facebook! ➲ http://goo.gl/fmAu02", "A cada 10 minutos você pode tentar levantar o martelo do Thor. Se você for digno será movido para o primeiro lugar da fila, digite !thor para provar o seu valor!"],
      messageInterval: 5,
      songstats: false,
      thorCommand: true,
      thorCooldown: 10,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
