# bhagavad_gita_api.js
Web-API for [gita-api.vercel.app](https://gita-api.vercel.app) an opensource rest API on Vedic Scripture Shrimad Bhagavad Gita,
[Source](https://github.com/vedicscriptures/bhagavad-gita-api)

```JavaScript
async function main() {
	const { BhagavadGitaApi } = require("./bhagavad_gita_api.js")
	const bhagavadGitaApi = new BhagavadGitaApi()
	const verseInfo = await bhagavadGitaApi.getVerse("chapterNumber", "verseNumber")
	console.log(verseInfo)
}

main()
```
