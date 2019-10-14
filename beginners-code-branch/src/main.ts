
// platformBrowserDynamic is a function used to bootstrap an Angular application.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Custom module which we have created
import { FirstModule } from './app/app.module';

// Render application using AppModule. 
platformBrowserDynamic().bootstrapModule(FirstModule);