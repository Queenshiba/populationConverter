const mykey = config.MY_KEY;

(async () => {

	// const pref = await (await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
	// "method": "GET",
	// "headers": {
	// 	"X-API-KEY": mykey
	// }})).json();
	// console.log(pref)

	const population = await (await fetch("http://api.e-stat.go.jp/rest/3.0/app/json/getStatsData?appId=cc16d97937102367b7c4cd03f61cccb8997265c3&lang=J&statsDataId=0003412316&metaGetFlg=Y&cntGetFlg=N&explanationGetFlg=Y&annotationGetFlg=Y&sectionHeaderFlg=1", {
		"method": "GET"
	})).json();

	// destructuring
	const { PARAMETER: paraneter, RESULT: result, STATISTICAL_DATA: statisticalData } = population.GET_STATS_DATA;

	console.log(population)

	// get the names of pref
	const { CLASS_INF: classInfo } = statisticalData
	const prefNames = classInfo.CLASS_OBJ[2].CLASS

	// get the population
	const groupByPref = statisticalData.DATA_INF.VALUE

	// prep for creating table
	let table = document.getElementById('table')
	let trTag;


	for (let i = 0; i < 48; i++) {
		trTag = document.createElement('tr')

		let tdTagForPref = document.createElement('td')
		let prefSelectionText = document.createTextNode(Object.values(prefNames[i])[1])
		console.log(Object.values(prefNames[i])[1])
		tdTagForPref.appendChild(prefSelectionText)


		let tdTagForPop = document.createElement('td')
		let populationText = document.createTextNode(groupByPref[i].$)
		tdTagForPop.appendChild(populationText)

		let tdTagForPercentage = document.createElement('td')
		let percentageText = document.createTextNode((groupByPref[i].$ / groupByPref[0].$ *100).toFixed(2))
		tdTagForPercentage.appendChild(percentageText)

		
		trTag.appendChild(tdTagForPref);
		trTag.appendChild(tdTagForPop);
		trTag.appendChild(tdTagForPercentage);
		table.appendChild(trTag);
	}




})();
// console.log(mykey)
console.log("test")