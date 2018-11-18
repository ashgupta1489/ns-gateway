import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NsgatewayEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        NsgatewayEmployeeMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NsgatewayEntityModule {}
