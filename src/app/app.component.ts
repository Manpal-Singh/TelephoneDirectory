import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'telephoneDirectory';
  contacts = [];
  p1;
  p2;
  p3;
  p4;
  p5;
  p6;
  p7;
  p8;
  p9;
  p10;
  p11;
  p12;
  p13;
  p14;
  p15;
  p16;
  p17;
  p18;
  p19;
  p20;
  name = 'name';
  pipes: [SearchPipe];
  personData = {};
  mobileLocalStorage = true;
  updateMobile;
  user;
  userName;

  ngOnInit() {
    this.p1 = new Person();
    this.p1.setName('Manpal');
    this.p1.setMobile(9567034770);
    this.p1.setAge(22);
    this.p1.setAddress('Bangalore');

    this.p2 = new Person();
    this.p2.setName('Subhosree');
    this.p2.setMobile(9567034761);
    this.p2.setAge(24);
    this.p2.setAddress('Bangalore');

    this.p3 = new Person();
    this.p3.setName('Gaurav');
    this.p3.setMobile(898123445);
    this.p3.setAge(20);
    this.p3.setAddress('Aligarh');

    this.p4 = new Person();
    this.p4.setName('Rekha');
    this.p4.setMobile(9567089827);
    this.p4.setAge(16);
    this.p4.setAddress('Delhi');

    this.p5 = new Person();
    this.p5.setName('Ravi Prakash');
    this.p5.setMobile(7981234498);
    this.p5.setAge(29);
    this.p5.setAddress('Benaras');

    this.p6 = new Person();
    this.p6.setName('Srinivas');
    this.p6.setMobile(9812346263);
    this.p6.setAge(24);
    this.p6.setAddress('Chennai');

    this.p7 = new Person();
    this.p7.setName('Rahul');
    this.p7.setMobile(789812345);
    this.p7.setAge(22);
    this.p7.setAddress('Agartala');

    this.p8 = new Person();
    this.p8.setName('Jitendra');
    this.p8.setMobile(9012357949);
    this.p8.setAge(30);
    this.p8.setAddress('Uttar Pradesh');

    this.p9 = new Person();
    this.p9.setName('Priyanka');
    this.p9.setMobile(7651234567);
    this.p9.setAge(25);
    this.p9.setAddress('Gujrat');

    this.p10 = new Person();
    this.p10.setName('Arkadeep');
    this.p10.setMobile(8712345687);
    this.p10.setAge(27);
    this.p10.setAddress('Kolkata');

    this.p11 = new Person();
    this.p11.setName('Abhijeet');
    this.p11.setMobile(7812345678);
    this.p11.setAge(34);
    this.p11.setAddress('Nagpur');

    this.p12 = new Person();
    this.p12.setName('Nihal');
    this.p12.setMobile(91254678123);
    this.p12.setAge(25);
    this.p12.setAddress('Jalpaiguri');

    this.p13 = new Person();
    this.p13.setName('Astik');
    this.p13.setMobile(9567036724);
    this.p13.setAge(27);
    this.p13.setAddress('Bihar');

    this.p14 = new Person();
    this.p14.setName('Vasram');
    this.p14.setMobile(9567024353);
    this.p14.setAge(22);
    this.p14.setAddress('Mumbai');

    this.p15 = new Person();
    this.p15.setName('Harshith');
    this.p15.setMobile(8912345876);
    this.p15.setAge(28);
    this.p15.setAddress('Bhopal');

    this.p16 = new Person();
    this.p16.setName('Rohit');
    this.p16.setMobile(7612345987);
    this.p16.setAge(21);
    this.p16.setAddress('Nainital');

    this.p17 = new Person();
    this.p17.setName('Venkat');
    this.p17.setMobile(8912095649);
    this.p17.setAge(29);
    this.p17.setAddress('Vizag');

    this.p18 = new Person();
    this.p18.setName('Vidur');
    this.p18.setMobile(9562345679);
    this.p18.setAge(21);
    this.p18.setAddress('Vijaywada');

    this.p19 = new Person();
    this.p19.setName('Phani');
    this.p19.setMobile(9561236700);
    this.p19.setAge(29);
    this.p19.setAddress('Guntur');

    this.p20 = new Person();
    this.p20.setName('Shani');
    this.p20.setMobile(9567034771);
    this.p20.setAge(27);
    this.p20.setAddress('Gaya');

    this.contacts.push(this.p1);
    this.contacts.push(this.p2);
    this.contacts.push(this.p3);
    this.contacts.push(this.p4);
    this.contacts.push(this.p5);
    this.contacts.push(this.p6);
    this.contacts.push(this.p7);
    this.contacts.push(this.p8);
    this.contacts.push(this.p9);
    this.contacts.push(this.p10);
    this.contacts.push(this.p11);
    this.contacts.push(this.p12);
    this.contacts.push(this.p13);
    this.contacts.push(this.p14);
    this.contacts.push(this.p15);
    this.contacts.push(this.p16);
    this.contacts.push(this.p17);
    this.contacts.push(this.p18);
    this.contacts.push(this.p19);
    this.contacts.push(this.p20);

    this.sort(this.name);
    this.personData = this.contacts[0];

    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user != null) {
      this.userName = this.user.name;
    }
  }

  sort(name) {
    this.contacts.sort( (a, b) => {
      if(a[name] < b[name]) {
          return -1;
      }
      else if(a[name] > b[name]) {
          return 1;
      }
      else {
          return 0;
      }
    });
  }

  personDetails(person) {

    localStorage.setItem('user', JSON.stringify(person));
    alert(person.name + " " + 'details saved to Local storage.View Details on page refresh.');
  }

}
