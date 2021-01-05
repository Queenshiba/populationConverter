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
		
		console.log(population)
		
})();
	// console.log(mykey)
	console.log("test")