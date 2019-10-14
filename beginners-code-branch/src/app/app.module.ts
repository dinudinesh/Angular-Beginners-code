// In Angular your code is structured into packages called Angular Modules, or NgModules for short. The purpose of a NgModule is to declare each thing you create in Angular, and group them together.
import { NgModule } from "@angular/core";
// The browser module is imported from @angular/platform-browser and it is used when you want to run your application in a browser.
import { BrowserModule } from "@angular/platform-browser";

// Custom component which we have created
import { HelloAngular } from "./app.component"

// An NgModule is a class marked by the @NgModule decorator.
@NgModule({
    declarations: [HelloAngular], // List of all components within the module
    imports: [BrowserModule],     // Module needed for running Angular websites. 
    bootstrap: [HelloAngular]     // Bootstrap: Identifies the root component that Angular should bootstrap when it starts the application.
})

export class FirstModule { }