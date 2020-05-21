import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema(
  {
    mensagem: {
      type: String,
      required: true,
    },
    de: {
      type: Number,
      required: true,
    },
    para: {
      type: Number,
      required: true,
    },
    lido: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Chat', ChatSchema);
