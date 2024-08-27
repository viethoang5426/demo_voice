/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Add Lib
import Tts from 'react-native-tts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  //Set language voice
  useEffect(() => {
    const setLanguageTts = async () => {
      await Tts.setDefaultLanguage('vi-VN');
    };
    setLanguageTts();
  }, []);

  //Speaking
  const speakingMess = mess => {
    Tts.speak(mess);
  };

  //Console log List Of Voice
  const logListOfVoice = () => {
    Tts.voices().then(voices => console.log(voices));
  };

  //Stop voice speaking
  const stopVoice = () => {
    Tts.stop();
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Text>Demo Voice Speakingg </Text>

        <TouchableOpacity
          onPress={() => speakingMess('Bạn đang chưa đỗ xe đúng vị trí')}
          style={{width: '100%', height: 100, backgroundColor: 'blue'}}>
          <Text>Speaking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => logListOfVoice()}
          style={{width: '100%', height: 100, backgroundColor: 'red'}}>
          <Text>Console log list voice available</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => stopVoice()}
          style={{width: '100%', height: 100, backgroundColor: 'red'}}>
          <Text>Stop Voice Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
