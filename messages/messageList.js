let welcomeMessage = "Üdvözöllek! \n A Dogvision Discord szerver botja vagyok. Funkcióim jelenleg fejlesztés alatt állnak, " +
"ezért még nem tudok sajnos sokat nyújtani neked. Ha van bármilyen ötleted, " +
"esetleg fejleszteni akarsz engem (rendelkezel Javascript, Node.js tudással) nyugodtan keresd meg a gazdámat, akit Captain Flint néven találsz. " +
"\n \nCommandjaim: " +
"\n??nb - Következő BDO Boss éledése a szerveren: EU\n " +

"\nJó beszélgetést és további szép napot neked! Innentől kezdve hallgatok az utasításokra!" +

"\n--------------------------------------------------------------------------------------------------------------------------------------------------------\n " +

"Hey! \n I am the Dogvision Discord server's bot. My functions are under development right now, so I can offer you less help during this time. " +
"If you have a good idea or you want to develop me (have knowledge in Javascript, Node.js) feel free to contact my master, Captain Flint. " +
"\n \nCommands: " +
"\n??nb - Next BDO boss spawn in server: EU\n " +

"\nEnjoy yourself and have a good day! From now on I am listening to your calls!";

let wrongMessage = "Ezt a parancsot nem ismerem! I don't know this command! :("

module.exports = {
    getWelcomeMessage: function () {
        return welcomeMessage;
    },
    getWrongMessage: function () {
        return wrongMessage;
    }

};