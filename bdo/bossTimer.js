// timeslist
let timeList = [ "0:15","2:00", "5:00","9:00","12:00","16:00","19:00","22:15","23:15"];

//boss table
let bossTable = [
    {"0:15" : "Kutum / Karanda", "2:00" : "Karanda", "5:00" : "Kzarka", "9:00" : "Kzarka", "12:00" : "Offin", "16:00" : "Kutum", "19:00" : "Nouver", "22:15" : "Kzarka", "23:15" : "None"},
    {"0:15" : "Karanda", "2:00" : "Kutum",  "5:00" : "Kzarka", "9:00" : "Nouver", "12:00" : "Kutum", "16:00" : "Nouver", "19:00" : "Karanda", "22:15" : "Garmoth","23:15" : "None"},
    {"0:15" : "Kutum / Kzarka","2:00" : "Karanda", "5:00" : "Kzarka", "9:00" : "Karanda", "12,00" : "None", "16:00" : "Kutum", "19:00" : "Offin", "22:15" : "Karanda / Kzarka", "23:15" : "Quint / Muraka"},
    {"0:15" : "Nouver", "2:00" : "Kutum", "5:00" : "Nouver", "9:00" : "Kutum", "12:00" : "Nouver", "16:00" : "Kzarka", "19:00" : "Kutum", "22:15" : "Garmoth", "23:15" : "None"},
    {"0:15" : "Kzarka / Karanda", "2:00" : "Nouver", "5:00" : "Karanda", "9:00" : "Kutum", "12:00" : "Karanda", "16:00" : "Nouver", "19:00" : "Kzarka", "22:15" : "Kutum / Kzarka", "23:15" : "None"},
    {"0:15" : "Karanda", "2:00" : "Offin", "5:00" : "Nouver", "9:00" : "Kutum", "12:00" : "Nouver", "16:00" : "Quint / Muraka", "19:00" : "Karanda / Kzarka", "22:15" : "None", "23:15" : "None"},
    {"0:15" : "Kutum / Nouver", "2:00" : "Kzarka", "5:00" : "Kutum", "9:00" : "Nouver", "12:00" : "Kzarka", "16:00" : "Vell", "19:00" : "Garmoth", "22:15" : "Kzarka / Nouver", "23:15" : "None"}
]

getCurrentDay = () => {
	let today = new Date();
	today.setHours(today.getHours() + 2); //CEST
	let n = today.getDay();

	if(n != 0){
    		n = today.getDay()-1;
	} else if(n == 0){
    		n = 6;
	}
	return n;
}

//nextboss
getNextBossTime = () => {
	// now
	let date = new Date();
	//date.setHours(date.getHours() + 2); //CEST
	let datetext = date.toTimeString();
	datetext = datetext.split(' ')[0];

    for (let time of timeList) {
        //converting datetext (now) to sec
        let now = 0;
        let listDateText = datetext.split(':')
        now = (parseInt(listDateText[0]) * 3600) + (parseInt(listDateText[1]) * 60); //+ parseInt(listDateText[2])

        //converting time in timeTable to sec
        let tableTime = 0;
        let listTime = time.split(':');
        tableTime = (parseInt(listTime[0]) * 3600) + (parseInt(listTime[1]) * 60);
        console.log(now)
        console.log(tableTime)
        if(now < tableTime) {           
            return time;
        }
    }
}

module.exports = {
    getNextBossText: function () {
        let nextBossTime = getNextBossTime();
	let currentDay = getCurrentDay();

        let table = bossTable[currentDay][nextBossTime];
        let getNext = getNextBossTime();

        return "The next world boss spawn in Black Desert Online(EU) will be: " + table + " at " + getNext + "!";
    }
};
