const express = require('express')
const { exec } = require('child_process')

const app = express()
const port = 3000

app.get('/macro', (req, res) => {
	console.log('Request received with action ' + req.query.action)

	switch (req.query.action) {
		case 'obs':
			console.log('Muting OBS')
			exec('"./mute_obs.ahk"')
			res.sendStatus(200)
			break
		case 'discord':
			console.log('Muting Discord')
			exec('"./mute_discord.ahk"')
			res.sendStatus(200)
			break
		case 'toggleplay':
			console.log('Toggling play status')
			exec('"./toggle_play.ahk"')
			res.sendStatus(200)
			break
		case 'previous':
			console.log('Previous track')
			exec('"./previous_track.ahk"')
			res.sendStatus(200)
			break
		case 'next':
			console.log('Next track')
			exec('"./next_track.ahk"')
			res.sendStatus(200)
			break
		default:
			res.sendStatus(404)
	}
})

app.listen(port)
console.log("App started")