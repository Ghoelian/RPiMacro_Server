const express = require('express')
const { exec } = require('child_process')

const app = express()
const port = 3000

app.get('/macro', (req, res) => {
	console.log('Request received with action ' + req.query.action)

	if (req.query.action === 'obs') {
		console.log('Muting OBS')
		exec('"./mute_obs.ahk"')
		res.sendStatus(200)
	} else if (req.query.action === 'discord') {
		console.log('Muting Discord')
		exec('"./mute_discord.ahk"')
		res.sendStatus(200)
	} else if (req.query.action === 'toggleplay') {
		console.log('Toggling play status')
		exec('"./toggle_play.ahk"')
		res.sendStatus(200)
	} else if (req.query.action === 'previous') {
		console.log('Previous track')
		exec('"./previous_track.ahk"')
		res.sendStatus(200)
	} else if (req.query.action === 'next') {
		console.log('Next track')
		exec('"./next_track.ahk"')
		res.sendStatus(200)
	} else res.sendStatus(404)
})

app.listen(port)
console.log("App started")