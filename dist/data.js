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
	// console.log(Object.values(prefNames[0])[1])
	let prefNameArr = []

	let prefSelection = document.getElementById('prefSelection')
	let optionTag = document.createElement('option')
	let prefSelectionText;
	for (let i = 0; i < prefNames.length; i++) {
		let optionTag = document.createElement('option')
		prefSelectionText = document.createTextNode(Object.values(prefNames[i])[1])
		optionTag.appendChild(prefSelectionText)
		prefSelection.appendChild(optionTag);
	}


	// const prefSelectionText = document.createTextNode(prefNameArr)

	console.log(prefSelectionText)



	// get the population
	const groupByPref = statisticalData.DATA_INF.VALUE
	let prefPopulationArr = []
	for (let i = 0; i < 48; i++) {
		prefPopulationArr.push(groupByPref[i].$)
	}
	// console.log(groupByPref)
	console.log(prefPopulationArr)


})();
// console.log(mykey)
console.log("test")