// importing core module /package for component.
// The line below is saying we want to import the Component code from the module @angular/core.
import { Component } from "@angular/core";
// A decorator adds more behavior to our class from outside the class. It must be declared immediately before the class. [Components are the most basic UI building block of an Angular app.] * Decorators are a typeScript feature.
@Component({
    //A component has a selector, template, style and other properties, using which it specifies the metadata required to process the component.
    selector: 'app-root',

    // template-  The content we want to load inside our selector. it's a blueprint for creating objects with specific functions and properties already attached to it.
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})

//class:- it’s a blueprint for creating objects with specific functions and properties already attached to it.
export class HelloAngular {
    title = "Sending Title - Using interpolation to print properties.";
    mobParts = [{
        'id': 1001,
        'name': "Screen 5.5",
        'description': "5.5 Screen for Moto g",
        'inStock': 5
    },
    {
        'id': 1002,
        'name': "Screen 5",
        'description': "5 Screen for Samsung",
        'inStock': 8
    },
    {
        'id': 1003,
        'name': "key panel",
        'description': "Key panel for Nokia",
        'inStock': 0
    }];

    totalMobPrts() {
        let sum = 0;
        for (let mobPart of this.mobParts) {
            sum += mobPart.inStock;
        }
        return sum;
    }
}

