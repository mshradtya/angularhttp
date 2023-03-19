import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularhttp';

  private user: any = {
    id: 2,
    name: 'Sigma Jamal',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.onUpdateUser();
    // this.onPatchUser();
    this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();
    // this.onDeleteUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done getting users')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done getting user')
    );
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done creating user')
    );
  }

  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done updating user')
    );
  }

  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done patching user')
    );
  }

  onDeleteUser(): void {
    this.userService.deleteUser(5).subscribe(
      (response) => console.log('response from delete', response),
      (error: any) => console.log(error),
      () => console.log('done deleting user')
    );
  }
}
