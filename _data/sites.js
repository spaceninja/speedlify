module.exports = {
	netlify: {
		description: "Scott's Websites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://www.spaceninja.com/",
			"https://fridayfrontend.com/",
			"https://mltshp.com/",
			"https://whowasthelastpresidentwithabeard.com/",
		]
	}
};
