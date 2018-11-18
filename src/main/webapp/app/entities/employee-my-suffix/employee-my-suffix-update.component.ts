import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';
import { EmployeeMySuffixService } from './employee-my-suffix.service';

@Component({
    selector: 'jhi-employee-my-suffix-update',
    templateUrl: './employee-my-suffix-update.component.html'
})
export class EmployeeMySuffixUpdateComponent implements OnInit {
    employee: IEmployeeMySuffix;
    isSaving: boolean;
    hireDate: string;

    constructor(private employeeService: EmployeeMySuffixService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ employee }) => {
            this.employee = employee;
            this.hireDate = this.employee.hireDate != null ? this.employee.hireDate.format(DATE_TIME_FORMAT) : null;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.employee.hireDate = this.hireDate != null ? moment(this.hireDate, DATE_TIME_FORMAT) : null;
        if (this.employee.id !== undefined) {
            this.subscribeToSaveResponse(this.employeeService.update(this.employee));
        } else {
            this.subscribeToSaveResponse(this.employeeService.create(this.employee));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IEmployeeMySuffix>>) {
        result.subscribe((res: HttpResponse<IEmployeeMySuffix>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
