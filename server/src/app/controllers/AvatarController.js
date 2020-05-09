import Avatar from '../models/Avatares';
import Usuario from '../models/Usuarios';

class AvatarController {
  async create(req, res) {
    const { originalname: nome, filename: path } = req.file;

    const avatar = await Avatar.create({
      nome,
      path,
    });

    const { id } = avatar;

    const usuario = await Usuario.findByPk(req.body.id);

    usuario.update({ id_avatar: id });

    return res.json(avatar);
  }
}

export default new AvatarController();
