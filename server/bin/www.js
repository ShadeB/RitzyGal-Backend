#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { createServer } from 'http';
import debugLib from 'debug';
import mongoose from 'mongoose';
import { error } from 'console';
import app from '../app';

const debug = debugLib('ritzygal-backend:server');

/**
 * Get port from environment and store in Express.
 */

/**
 * Create HTTP server.
 */

const server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

const { MONGO_USER, MONGO_PASSWORD, MONGO_CLUSTER } = process.env;
const { TEST_DB, LIVE_DB } = process.env;

// Use test database when in development else use production databse
const setDatabase = () => {
  const { NODE_ENV } = process.env;
  return NODE_ENV === 'development' ? TEST_DB : LIVE_DB;
};

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${setDatabase()}?retryWrites=true&w=majority`;

// connect to MongoDB database
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(port);
  })
  .then(() => {
    server.on('listening', onListening);
  })
  .catch((err) => {
    console.log(err);
    onError(error);
  });
