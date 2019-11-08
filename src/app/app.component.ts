import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CleverTap } from '@ionic-native/clevertap/ngx';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,clevertap: CleverTap) {
    platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      alert('You need to work now');
      clevertap.setDebugLevel(3);
      clevertap.createNotificationChannel("Test", "Clevertap Default Channel", "A TEST channel", 0, true);
      // clevertap.profileGetCleverTapID((id: any) => {console.log(id)});
      console.log("This is working");
      (<any>window).FirebasePlugin.getToken(token => console.log(`token: ${token}`))

(<any>window).FirebasePlugin.onMessageReceived((data) => {
   // console.log(`Notification was tapped in the ${message.tap}`);
    console.log("Message Received");
    // if (message.tap) { }
    //channel = fcm_default_channel
    clevertap.createNotification(JSON.stringify(data));

    return true;
    
});



  //Logging event (FE): notification_receive(_nr), Bundle[{firebase_event_origin(_o)=fcm, message_device_time(_ndt)=0, _nmc=display, message_time(_nmt)=1573202921, message_id(_nmid)=7145090087411993665}] 
});
  
  }
}

