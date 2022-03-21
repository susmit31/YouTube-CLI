const pup = require('puppeteer');
const {execSync} = require('child_process');
const readline = require('readline');

let inputs = process.argv.slice(2);
let query = inputs.join(" ");

(async (squery, reader)=>{
	browser = await pup.launch();
	const pg = await browser.newPage();
	await pg.goto('https://www.youtube.com');
	
	await pg.waitForSelector('input#search');
	await pg.type('input#search', squery);
	let searchbtn = await pg.$('button#search-icon-legacy');
	await searchbtn.click();
//	await pg.waitForNavigation();
	await pg.waitForTimeout(3000);
	await pg.waitForSelector('.ytd-search');
	const results = await pg.evaluate(()=>{
		let vids = document.querySelectorAll('a#video-title');
		let vid_titles = Array.from(vids).map(x=>[x.title,x.href])
										.filter(x=>x[0].length);
		return vid_titles;
	})
	results.forEach((res,i)=>{
		console.log(`[${i+1}] ${res[0]}`);
	});

	const readline = reader.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	readline.question("Please pick a video to play. ", num => {
		execSync(`youtube-dl -o - "${results[num-1][1]}" | tycat `);
		process.exit();
	})
})(query, readline);