class BhagavadGitaApi {
	constructor() {
		this.api = "https://gita-api.vercel.app"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getVerse(chapterNumber, verseNumber, language = "odi") {
		const response = await fetch(
			`${this.api}/${language}/verse/${chapterNumber}/${verseNumber}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getVerseSerial(verseNumberSerial, language = "odi") {
		const response = await fetch(
			`${this.api}/${language}/verse/${verseNumberSerial}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {BhagavadGitaApi}
