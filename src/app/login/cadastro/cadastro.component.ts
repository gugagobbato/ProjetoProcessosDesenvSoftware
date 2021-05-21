import { Router } from '@angular/router';
import { UsuariosModel } from '../../models/usuarios.model';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../providers/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  host: {
    class: 'vertical-content'
  },
  providers: [UsuariosService]
})
export class CadastroComponent implements OnInit {
  model: UsuariosModel = new UsuariosModel();
  error: string = undefined;

  constructor(private service: UsuariosService,
    private router: Router) { }

  ngOnInit() {

  }

  save() {
    if (!this.model.email || this.model.email.trim() == '') {
      this.error = "Informe o email"
    } else if (!this.model.senha || this.model.senha.trim() == '') {
      this.error = "Informe a senha"
    } else {
      this.service.adicionar(this.model).then(() => {
        this.router.navigate(['/login']);
      }).catch(function () { });
    }
  }
}
