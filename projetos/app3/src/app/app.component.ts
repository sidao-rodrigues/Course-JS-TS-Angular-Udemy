import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app3';

  ngOnInit(): void {
    
    var firebaseConfig = {
      apiKey: "AIzaSyDmrAmQmpponp6b2EEB3o37_0RysQfSkWk",
      authDomain: "jta-instagram-clone-ea384.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-ea384.firebaseio.com",
      projectId: "jta-instagram-clone-ea384",
      storageBucket: "jta-instagram-clone-ea384.appspot.com",
      messagingSenderId: "568681938245",
      appId: "1:568681938245:web:1d5f0ba0060ef5da32522c",
      measurementId: "G-K33W12HH3P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
