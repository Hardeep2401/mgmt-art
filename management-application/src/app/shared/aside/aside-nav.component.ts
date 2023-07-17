import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent implements OnInit {
  @ViewChild('userForm') userForm: any;
  tableData: any = [];
  title = 'Table Data';
  editMode: boolean = false;
  fetchUser: any;
  formModal: any;
  constructor(private http: HttpClient) {}

  pathUrl = 'http://localhost:3000/user';

  getUserValue(value: any) {
    if (value.id > 0) {
      this.http
        .put(`${this.pathUrl}/${value.id}`, value)
        .subscribe((response) => {
          this.getUserValue(response);
        });
    } else {
      this.http
        .post<any>(this.pathUrl, value)
        .subscribe((response) => (this.getUserValue = response));
    }
  }

  ngOnInit() {
    this.http.get(this.pathUrl).subscribe((response) => {
      this.tableData = response;
    });
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('staticBackdrop')
    );
  }

  onSave(value: any, index: any) {
    this.http
      .get<any>('http://localhost:3000/user/', value)
      .subscribe((response) => {
      });
    this.editMode = true;
    // this.tableId = true;
    console.log(this.tableData[index].id);
    this.userForm.setValue({
      id: this.tableData[index].id,
      name: this.tableData[index].name,
      username: this.tableData[index].username,
      email: this.tableData[index].email,
    });
  }

  onDeleteUser(value: any, index: any) {
    console.log(this.tableData[index].id, value);
    this.http
      .delete('http://localhost:3000/user/' + this.tableData[index].id, value)
      .subscribe(() => {});
  }

  openModal() {
    this.formModal.show();
    this.formModal.style.display = 'block';
  }
}
