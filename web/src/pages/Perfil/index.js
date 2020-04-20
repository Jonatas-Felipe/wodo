import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoMdAdd,
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
} from 'react-icons/io';

import { signOut } from '~/store/modules/auth/actions';

import { BgPerfil, Container, Content } from './styles';

export default function Perfil() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <BgPerfil>
      <Container>
        <Content>
          <div>
            <div>
              <img
                src="https://api.adorable.io/avatars/120/abott@adorable.png"
                alt="Avatar"
              />
              <h2>{user.name}</h2>
              <p>PROFISSÃO</p>
              <p className="email">{user.email}</p>
              <p>ENDEREÇO</p>
              <h3>Avaliações:</h3>
              <div>
                <IoMdStar size={30} color="#FFC726" />
                <IoMdStar size={30} color="#FFC726" />
                <IoMdStarHalf size={30} color="#FFC726" />
                <IoMdStarOutline size={30} color="#FFC726" />
                <IoMdStarOutline size={30} color="#FFC726" />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <Link>Editar Perfil</Link>
                </li>
                <li>
                  <Link>Perfil</Link>
                </li>
                <li>
                  <Link>Chat</Link>
                </li>
                <li>
                  <Link>Serviços</Link>
                </li>
                <li className="sair">
                  <button type="button" onClick={handleSignOut}>
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Perfil</h1>
            <h2>Trabalhos</h2>
            <img
              src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=1024&txt_altura=450&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
              alt="Trabalhos"
            />
            <div>
              <div>
                <img
                  src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=1024&txt_altura=450&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
                  alt="Trabalhos"
                />
              </div>

              <div>
                <img
                  src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=1024&txt_altura=450&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
                  alt="Trabalhos"
                />
              </div>

              <div>
                <img
                  src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=1024&txt_altura=450&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
                  alt="Trabalhos"
                />
              </div>

              <div>
                <img
                  src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=1024&txt_altura=450&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
                  alt="Trabalhos"
                />
              </div>

              <div>
                <img
                  src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=1024&txt_altura=450&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10"
                  alt="Trabalhos"
                />
              </div>
            </div>
            <div>
              <p>Cadastrar novo serviço: </p>
              <button type="button">
                <IoMdAdd size={20} color="#fff" />
                Cadastrar
              </button>
            </div>
          </div>
        </Content>
      </Container>
    </BgPerfil>
  );
}
