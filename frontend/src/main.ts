import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { datadogRum } from '@datadog/browser-rum';

if (environment.production) {
  enableProdMode();
}

datadogRum.init({
    applicationId: '0f3ff5f1-15f9-4e21-a098-02d17cdfa59d',
    clientToken: 'pubd847527d3afa62aefcb2b5c4a5cc5aaa',
    site: 'datadoghq.com',
    service:'cloudtodoapp',
    
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
