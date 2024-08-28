#!/usr/bin/env node

/**
 * Dépendances du module.
 */

var app = require('./app')
var http = require('http')

/**
 * Obtenir le port depuis l'environnement et le stocker dans Express.
 */

var port = normalizePort(process.env.PORT || '8000')
app.set('port', port)

/**
 * Créer le serveur HTTP.
 */

var server = http.createServer(app)

/**
 * Écouter sur le port fourni, sur toutes les interfaces réseau.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normaliser un port en un nombre, une chaîne, ou false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10)

	if (isNaN(port)) {
		// canal nommé
		return val
	}

	if (port >= 0) {
		// numéro de port
		return port
	}

	return false
}

/**
 * Écouteur d'événements pour l'événement "error" du serveur HTTP.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error
	}

	var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

	// gérer les erreurs spécifiques à l'écoute avec des messages amicaux
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' nécessite des privilèges élevés')
			process.exit(1)
			break
		case 'EADDRINUSE':
			console.error(bind + ' est déjà utilisé')
			process.exit(1)
			break
		default:
			throw error
	}
}

/**
 * Écouteur d'événements pour l'événement "listening" du serveur HTTP.
 */

function onListening() {
	var addr = server.address()
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
	console.log('Écoute sur ' + bind);
}
