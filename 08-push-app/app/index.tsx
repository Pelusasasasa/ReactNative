import { ThemedText } from '@/components/ThemedText'
import { usePushNotification } from '@/hooks/usePushNotification'
import React from 'react'
import { FlatList, View } from 'react-native'

const PushApp = () => {

    const { expoPushToken, notifications } = usePushNotification();

  return (
    <View style={{marginHorizontal: 10,marginTop: 5}}>
      {/* <ThemedText>Token: {expoPushToken}</ThemedText> */}

      <ThemedText style={{marginTop: 10, fontWeight: 'bold', fontSize: 20}}>Notificaciones</ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={item => item.request.identifier}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: 'gray', opacity: 0.3}}/>
        )}
        renderItem={({item}) => (
          <View>
            <ThemedText style={{fontWeight: 'bold'}}>
              {item.request.content.title}
            </ThemedText>
            <ThemedText>
              {item.request.content.body}
            </ThemedText>
            <ThemedText>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
      />

    </View>
  )
}

export default PushApp