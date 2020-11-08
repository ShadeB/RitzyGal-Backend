import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

import schema from './graphql/schemas/user';

import rootResolver from './graphql/resolvers/index';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use(cors);
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true,
  }),
);

export default app;
