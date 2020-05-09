import * as Yup from 'yup';

import Usuario from '../models/Usuarios';
import Avatares from '../models/Avatares';

class UsuarioController {
  async getAll(req, res) {
    const usuarios = await Usuario.findAll({
      include: [
        {
          model: Avatares,
          as: 'avatar',
          attributes: ['nome', 'path', 'url'],
        },
      ],
      where: {
        deleted_at: null,
      },
    });

    if (!usuarios) {
      return res.status(400).json({ error: 'Nenhum usuário encontrado.' });
    }
    return res.json(usuarios);
  }

  async getOne(req, res) {
    const usuario = await Usuario.findOne({
      include: [
        {
          model: Avatares,
          as: 'avatar',
          attributes: ['nome', 'path', 'url'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    if (!usuario) {
      return res.status(400).json({ error: 'Nenhum usuário encontrado.' });
    }

    if (usuario.deleted_at) {
      return res.status(400).json({ error: 'Este usuário foi apagado.' });
    }

    return res.json(usuario);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .required()
        .email(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro no preenchimento dos campos' });
    }

    // Validar se o e-mail já está cadastrado
    const userExists = await Usuario.findOne({
      where: {
        email: req.body.email,
        deleted_at: null,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    const usuario = await Usuario.create(req.body);

    return res.json(usuario);
  }

  async update(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(400).json({ error: 'Nenhum usuário encontrado.' });
    }

    if (usuario.deleted_at) {
      return res.status(400).json({ error: 'Este usuário foi apagado.' });
    }

    const { email } = req.body;

    // Valida caso outro usuário possua o mesmo e-mail
    if (email && email !== usuario.email) {
      const emailJaCadastrado = await Usuario.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (emailJaCadastrado) {
        return res
          .status(400)
          .json({ error: 'Este e-mail já está cadastrado.' });
      }
    }

    await usuario.update(req.body);

    return res.json({ message: 'Usuário alterado com sucesso.' });
  }

  async delete(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(400).json({ error: 'Nenhum usuário encontrado.' });
    }

    if (usuario.deleted_at) {
      return res.status(400).json({ error: 'Este usuário foi apagado.' });
    }

    await usuario.update({ deleted_at: Date.now() });

    return res.json({ message: 'Usuário apagado com sucesso.' });
  }
}

export default new UsuarioController();
