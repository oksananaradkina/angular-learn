import { Component } from '@angular/core';
import { myArray, IFamily } from './family';




@Component({
    selector: 'app-root',
    template: `
<h2>{{title}}</h2>


<table class="famyly-table">
<tr *ngFor="let item of items" >
<td>{{item.f}}</td>
<td>{{item.i}}</td>
<td>{{item.o}}</td>
<td>{{item.gender}}</td>
<td>{{item.year}}</td>
</tr>
</table>

<div class="form-input">
<label>Фамилия</label>
<input type="text" name="man_f" [(ngModel)]="newMan.f">
</div>

<div class="form-input">
    <label>Имя</label>
    <input type="text" name="man_i" [(ngModel)]="newMan.i">
</div>
<div class="form-input">
<label>Отчество</label>
<input type="text" name="man_o" [(ngModel)]="newMan.o">
</div>


<div class="form-input">
<label>Пол</label>
<select name="man_gender" [(ngModel)]="newMan.gender">
    <option  *ngFor="let gender of genderList" [value]="gender">
        {{gender}}
    </option>
</select>
</div>

<div class="form-input">
<label>Год рождения</label>
<input type="text" name="man_year" [(ngModel)]="newMan.year">
</div>

<div>
<button (click)="onAdd()">Добавить</button>
</div>


  `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-learn';
    genderList = ['male', 'female'];
    name = 'Ксюша';

    items = myArray;

    newMan: IFamily = {
        f: null,
        i: null,
        o: null,
        gender: null,
        year: 2000
    }


    onAdd() {
        this.items.push({ ...this.newMan });
        Object.keys(this.newMan)
            .forEach((key: string) => this.newMan[key] = null);

    }

}
