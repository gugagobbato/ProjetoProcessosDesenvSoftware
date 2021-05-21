import { Router } from '@angular/router';
import { UsuariosService } from '../../providers/usuarios.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: 'vertical-content'
  },
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {
  login: any = {
    usuario: '',
    senha: '',
  };

  error: string = null;

  constructor(private service: UsuariosService,
    private router: Router) { }

  ngOnInit() {
  }

  logar() {
    this.service.login(this.login.usuario, this.login.senha).then((res: any) => {
      console.log(res);
      if (res.rows.length > 0) {
        this.router.navigate(['/home']);
      } else {
        this.error = 'Login Inválido!';
      }
    }).catch((err) => {
      this.error = 'Erro no Login';
    });
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log(event);
    console.log('Back button pressed');
  }
}
