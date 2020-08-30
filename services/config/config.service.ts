

import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import {trigger, state, animate, style, transition} from '@angular/core';

@Injectable()
export class ConfigService {
	apiURL:string;
	constructor() {
		this.apiURL = "http://localhost/saNG4-Demo-App/api/";
	}

}

export class ValidationService {
	static father_nameValidator: any;
	static mother_nameValidator: any;

	static emailValidator(control) {
		// RFC 2822 compliant regex
		if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
			return null;
		} else {
			return { 'invalidEmailAddress': true };
		}
	}

	

	static addressValidator(control) {
		// RFC 2822 compliant regex
		if(control.value===undefined){
			return null;
		} else {
			return { 'invalidAddress': true };
		}
	}

	static roll_noValidator(control: { value: any; }) {
		// RFC 2822 compliant regex
	
		if(control.value!==undefined){
			return null;
		} else {
			return { 'invalidroll_no': true };
		}
	}

	static dateValidator(control) {
		// RFC 2822 compliant regex
		if(control.value!==undefined){
			return null;
		} else {
			return { 'invalidDate': true };
		}
	}


	static passwordValidator(control) {
		// {6,100}           - Assert password is between 6 and 100 characters
		// (?=.*[0-9])       - Assert a string has at least one number
		if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
			return null;
		} else {
			return { 'invalidPassword': true };
		}
	}

	static checkLimit(min: number, max: number): ValidatorFn {
		return (c: AbstractControl): { [key: string]: boolean } | null => {
			if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
				return { 'range': true };
			}
			return null;
		};
	}
}



export function routerTransition() {
	return slideToLeft();
}

function slideToLeft() {
	return trigger('routerTransition', [
		transition(':enter', [
			style({transform: 'translateX(100%)', position:'fixed', width:'100%'}),
			animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
			]),
		transition(':leave', [
			style({transform: 'translateX(0%)', position:'fixed', width:'100%'}),
			animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
			])
		]);
}



