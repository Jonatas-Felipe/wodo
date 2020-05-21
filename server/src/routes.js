import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';

import UsuarioController from './app/controllers/UsuarioController';
import AvatarController from './app/controllers/AvatarController';
import ChatController from './app/controllers/ChatController';

const upload = multer(multerConfig);

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Wodo' }));

routes.post('/session', SessionController.store);

routes.get('/usuarios', UsuarioController.getAll);
routes.get('/usuario/(:id)', UsuarioController.getOne);
routes.post('/usuario', UsuarioController.create);
routes.put('/usuario/(:id)', UsuarioController.update);
routes.delete('/usuario/(:id)', UsuarioController.delete);

routes.post('/avatar', upload.single('file'), AvatarController.create);

routes.get('/chat/(:de)/(:para)', ChatController.get);
routes.post('/chat', ChatController.create);
routes.post('/chat/setRead', ChatController.setRead);

export default routes;
