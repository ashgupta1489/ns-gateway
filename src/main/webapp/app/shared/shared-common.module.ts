import { NgModule } from '@angular/core';

import { NsgatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NsgatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NsgatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NsgatewaySharedCommonModule {}
