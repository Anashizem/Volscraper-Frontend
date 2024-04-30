import { ChangeDetectorRef, Component, ViewChild , OnInit , Input} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import {
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash
  @Input() collapsed = false ;
  @Input() screenWidth = 0 ;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  id: string = "";
  name: string = "";
  email: string = "";
  country: string = "";
  currentUserId : string ="";

  displayedColumns: string[] = ['id', 'name', 'email', 'country', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient , private cdr : ChangeDetectorRef) {
    this.getAllUsers();
  }
  ngOnInit() {
    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.getBodyClass();
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768) {
      styleClass = 'body-md-screen';
    }
    console.log(styleClass);
    return styleClass;
  }
  getAllUsers() {
    this.http.get("http://localhost:8085/Users/GetAllUsers")
      .subscribe((resultData: any) => {
        this.dataSource = new MatTableDataSource(resultData);
        this.cdr.detectChanges();
        this.dataSource.paginator = this.paginator;
      });
  }

  Register() {
      let bodydata = {
        "name": this.name,
        "email": this.email,
        "country": this.country
      }
      this.http.post("http://localhost:8085/Users/save", bodydata , {responseType:"text"}).subscribe((resultData:any)=>{
        // alert("User registered successfully!");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User registered successfully",
          showConfirmButton: false,
          timer: 1500
        });
        this.getAllUsers();
        this.name = "";
        this.email = "";
        this.country = ""
      }) 
  }
  setUpdate(data:any){
    this.name = data.name;
    this.email= data.email;
    this.country = data.country;
    this.currentUserId = data.id;
  }
  UpdateData(){
    let bodydata = {
      "id" : this.currentUserId,
      "name": this.name,
      "email": this.email,
      "country": this.country
    }
    this.http.put("http://localhost:8085/Users/Update", bodydata , {responseType:"text"}).subscribe((resultData:any)=>{
      // alert("User updated successfully!");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
      this.getAllUsers();
      this.name = "";
      this.email = "";
      this.country = ""
    }) 
  }

  save(){
    if(this.currentUserId == "") {
      this.Register();
    }
    else {
      this.UpdateData();
    }
  }
  SetDelete(data:any){
    this.http.delete('http://localhost:8085/Users/Delete/' + data.id, {responseType: 'text'})
    .subscribe(
      (resultData:any) => {
        // alert(resultData);
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
           
          },
          buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getAllUsers();
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error"
            });
          }
        });
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  clear() {
    this.name = "";
    this.email = "";
    this.country = "";
    this.currentUserId = "";
  }

}
