import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {
  todos:any = [];
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.todos = await this.loadTodos();
    console.log(this.todos);
    
  }

  loadTodos(){
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.get(url));
  }

}
