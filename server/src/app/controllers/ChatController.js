import * as Yup from 'yup';

import Chat from '../schema/Chat';

class ChatController {
  async get(req, res) {
    const chat = await Chat.find({
      de: req.params.de,
      para: req.params.para,
    });
    return res.json(chat);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      mensagem: Yup.string().required(),
      de: Yup.string().required(),
      para: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro no preenchimento dos campos' });
    }

    if (req.body.de === req.body.para) {
      return res
        .status(400)
        .json({ error: 'Não é possível enviar mensagem para si mesmo' });
    }

    const chatData = req.body;

    await Chat.create(chatData);

    return res.json({ message: 'Inserido com sucesso' });
  }

  async setRead(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro no preenchimento dos campos' });
    }

    const { id } = req.body;

    await Chat.updateOne({ _id: id }, { lido: true });

    return res.json({ message: 'Alterado com sucesso' });
  }
}

export default new ChatController();
