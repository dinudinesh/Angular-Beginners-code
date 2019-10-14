// importing core module /package for component.
// The line below is saying we want to import the Component code from the module @angular/core.
import { Component } from "@angular/core";

// A decorator adds more behavior to our class from outside the class. It must be declared immediately before the class. [Components are the most basic UI building block of an Angular app.] * Decorators are a typeScript feature.
@Component({
    //A component has a selector, template, style and other properties, using which it specifies the metadata required to process the component.
    selector: 'app-root',

    // template-  The content we want to load inside our selector. it's a blueprint for creating objects with specific functions and properties already attached to it.
    template: '<h1>Welcome to Angular World...</h1>'
})

//class:- it’s a blueprint for creating objects with specific functions and properties already attached to it.
export class HelloAngular { }