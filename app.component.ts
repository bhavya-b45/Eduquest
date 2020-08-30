import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'EduQuest Student Management System ';
	studentsList = [
	{	
		id: 101,
		roll_no: 14005,
		first_name : "Jeon",
		last_name : "Jungkook",
		email : "JJeon@eduquest.com",
		phone : 9503733178,
		department : "Music",
		mother_name: "Julie Jeon",
		father_name: "Jeon Kim",
		address: "1016  Elm Drive, New York, 10021",
		DOB: '05/04/2001'
	},
	{
		id : 102,
		roll_no: 14008,
		first_name : "Park",
		last_name : "Jimin",
		email : "Jimin@eduquest.com",
		phone : 8574889658,
		department : "Science",
		mother_name: "June Park",
		father_name: "Park Ollie",
		address: "2304  Oakdale Avenue, Winter Haven, Florida, 33830",
		DOB: '25/05/2001'
	},
	{
		id : 103,
		roll_no: 14010,
		first_name : "Kim",
		last_name : "Tahyung",
		email : "taetae@eduquest.com",
		phone : 7485889658,
		department : "Arts",
		mother_name: "Momo Kim",
		father_name: "Kim Hoesok",
		address: "319  Hillview Drive, Lagrange, Georgia, 30240",
		DOB: '07/10/2001'
	},
	{
		id : 104,
		roll_no: 14012,
		first_name : "Min",
		last_name : "Yoongi",
		email : "minsuga@eduquest.com",
		phone : 9685589748,
		department : "Arts",
		mother_name: "Jennie Min",
		father_name: "Min Jin",
		address: "4328  Jerry Toth Drive, Nunapitchuk, Alaska, 99641",
		DOB: '25/12/2001'
	},
	{
		id : 105,
		roll_no: 14014,
		first_name : "Rose",
		last_name : "Kim",
		email : "Rose@eduquest.com",
		phone : 8595856547,
		department : "Engineering",
		mother_name: "Lisa Leo",
		father_name: "Kim Namjoon",
		address: "2200  Maxwell Farm Road, Troutville, Virginia, 24175",
		DOB: '15/08/2001'
	}
	];

	constructor() {
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}


