import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-with-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-with-auth.component.html',
  styleUrl: './login-with-auth.component.css'
})
export class LoginWithAuthComponent {

  userMail: string = "";
  userPWD: string = "";

  loggedUser: string = "";

  constructor(public auth: Auth) {
  }

  Login() {
    signInWithEmailAndPassword(this.auth, this.userMail, this.userPWD).then((res) => {
      //if (res.user.email !== null) this.loggedUser = res.user.email;
    }).catch((e) => console.log(e))
  }

  CloseSession(){
    signOut(this.auth).then(() => {
      console.log(this.auth.currentUser?.email)
    })
  }
}
