
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usuarios: any = [];
  job: string = ""
  name: string = ""
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.userService.getUsers().subscribe(data => {
      this.usuarios = data.data
    })
  }

  create(form: NgForm) {
    //me falta funcion de validar
    if (form.value.id != -1) {
      this.userService.update(form.value).subscribe((res) => {
        form.reset();
        this.list()
      })
    } else {
      if (!form.valid) {
        console.log("Formulario invalido")
        return
      } else {
        let us = {
          name: form.value.name,
          job: form.value.job
        }
        this.userService.createUsers(us).subscribe(
          (data) => {
            console.log(data);
            form.reset();
            this.list()
          })
      }
    }


  }

  delete(id: any) {
    let confirmacion = confirm("¿desea eliminar el Usuarui  #" + id)
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe((data) => {
        console.log("Respuesta de eliminado");
        this.list()
      });
    }
  }
  update(user: any) {

    this.userService.datosUsuarios = {
      id: user.id,
      name: user.first_name,
      job: "CuantiFisico"
    }
    this.userService.update(user)
  }
  reset(form: NgForm) {
    form.reset();
    this.userService.datosUsuarios={
      id:-1
    }
  }
}
