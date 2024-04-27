import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  id: string = "";
  name: string = "";
  email: string = "";
  country: string = "";

  displayedColumns: string[] = ['id', 'name', 'email', 'country', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get("http://localhost:8085/Users/GetAll")
      .subscribe((resultData: any) => {
        this.dataSource = new MatTableDataSource(resultData);
        this.dataSource.paginator = this.paginator;
      });
  }

  Register() {
    let bodydata = {
      "id" : this.id,
      "name" : this.name,
      "email" : this.email,
      "coutry": this.country
    }
    this.http.post("http://localhost:8085/Users/Add", bodydata).toPromise().then(()=>{
      alert("User added successfully");
      document.getElementById("addUserModal")!.classList.remove("show");
      window.location.reload();
    }).catch((error)=>{
      if (error.status == 409){
        alert("Email already exists.");
      }else{
        alert("Something went wrong!");
      }
    })
  }
  SetUpdate(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.country = data.country;
  }

  UpdateData() {
    // Ajoutez la logique pour mettre à jour les données utilisateur à partir du formulaire
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

class MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
