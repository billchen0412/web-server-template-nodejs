import express from 'express';
import path from 'path';
import * as Api from './Api';
import * as Config from './Config';
import { router } from "./router";
import { getLogger } from './Logger';

const log = getLogger('server');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(Api.errorHandler);

app.use('/', router);

app.listen(Config.serverPort, () => {
  log.info('listening on port %s.', Config.serverPort);
}).on('error', (e) => {
  log.error('Unable to open server: %s', e);
}).on('close', async () => {
  log.warn('server closed.');
});