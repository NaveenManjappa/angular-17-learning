import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
    constructor(){

    }
    // constructor(name:string){

    // }
    Subscribe(type:string){
        //Add user to database
        //Send email with subscription email
        //Allow user to access service
        alert('Thanks for subsribing:'+type);
      }
}