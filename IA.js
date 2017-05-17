API.on('chat', function(obj) {
    var user = API.getUser().id
    if(obj.message.indexOf("quais são as regras loli?", "link das regras") != -1){
            API.sendChat("nossas regras? aqui estão elas :D http://goo.gl/i7JUIX");
        }
});
