import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

interface sendPushOptions {
    to: string[],
    title: string,
    body: string,
    data?: Record<string, any>
}

async function sendPushNotification(options: sendPushOptions) {
    const { to, title, body, data} = options;
    const message = {
      to: to,
      sound: 'default',
      title: title,
      body: body,
      data: data,
    };
  
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  function handleRegistrationError(errorMessage: string) {
    alert(errorMessage);
    throw new Error(errorMessage);
  };

  async function registerForPushNotificationsAsync() {
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        handleRegistrationError('Permission not granted to get push token for push notification!');
        return;
      }
      const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      if (!projectId) {
        handleRegistrationError('Project ID not found');
      }
      try {
        const pushTokenString = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log({[Platform.OS]: pushTokenString});
        return pushTokenString;
      } catch (e: unknown) {
        handleRegistrationError(`${e}`);
      }
    } else {
      handleRegistrationError('Must use physical device for push notifications');
    }
  }
  

let areListenersRead = false;

export const usePushNotification = () => {

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notifications, setNotifications] = useState<Notifications.Notification[]>([]);

    useEffect(() => {
      registerForPushNotificationsAsync()
        .then(token => setExpoPushToken(token ?? ''))
        .catch((error: any) => setExpoPushToken(`${error}`));
    }, []);

    useEffect(() => {
      if(areListenersRead) return;

      areListenersRead = true
      const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            console.log(notification);
            setNotifications((prevNotifications) => [notification, ...prevNotifications]);
        });

        
      const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
        // JSON.stringify(response, null, 2)

        const { chatId } = response.notification.request.content.data;
        console.log("a");
        if( chatId ){
          router.push(`/chat/${chatId}`)
        }

      });

      return () => {
        notificationListener.remove();
        responseListener.remove();
      };
    }, [])
    

  return {
    expoPushToken,
    notifications,

    //Metodos
    sendPushNotification,

  }
}
