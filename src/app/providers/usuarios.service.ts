import { UsuariosModel } from '../models/usuarios.model';
import { DbService } from './db.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  constructor(
    private db: DbService
  ) { }

  adicionar(usuario: UsuariosModel) {
    return this.db.execute("INSERT INTO usuarios (nome,cpf,email,senha,telefone,endereco) VALUES (?,?,?,?,?,?)", [
      usuario.nome,
      usuario.cpf,
      usuario.email,
      usuario.senha,
      usuario.telefone,
      usuario.endereco
    ]);
  }

  login(usuario: string, senha: string) {
    return this.db.execute("SELECT * FROM usuarios WHERE email = ? and senha = ?", [
      usuario, senha
    ]);
  }
}
