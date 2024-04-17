import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';

import { AppModule } from './app/app.module';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x+WmFZfVpgdVVMYlpbR39PIiBoS35RckVnWXdccnZTQmBYUEx3");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
