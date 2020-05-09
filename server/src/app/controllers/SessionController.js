import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Usuario from '../models/Usuarios';

import authConfig from '../../config/auth';

class SessionControler {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required()
        .email(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro no preenchimento dos campos' });
    }
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }

    if (!(await usuario.checkPassword(password))) {
      return res.status(401).json({ error: 'Usuário e/ou senha incorretos.' });
    }

    const { id, name } = usuario;

    return res.json({
      usuario: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionControler();
