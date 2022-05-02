import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { ContadorComponent } from './contador.component';
import { CommonModule } from '@angular/common';
@NgModule({

    declarations: [
        
        ContadorComponent

    ],

    exports: [
        ContadorComponent
       
    ],
    imports:[
        CommonModule
    ]



})

export class ContadorModule{

}