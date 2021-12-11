import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
  Image,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigationToPoints() {
    navigation.navigate('Points', { uf, city });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      enabled
    >
      <ImageBackground
        source={require('../../assets/home-background.png')}
        imageStyle={{
          width: 274,
          height: 368,
        }}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.main}>
            <Image source={require('../../assets/logo.png')} />
            <View>
              <Text style={styles.title}>
                Encontre um ponto de coleta de materiais recicláveis
              </Text>
              <Text style={styles.description}>
                Conectamos pessoas a pontos de coleta
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TextInput
              style={styles.input}
              placeholder="Digite a UF"
              placeholderTextColor="#457b9d"
              value={uf}
              maxLength={2}
              autoCapitalize="characters"
              autoCorrect={false}
              onChangeText={setUf}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite a cidade"
              placeholderTextColor="#457b9d"
              value={city}
              autoCorrect={false}
              onChangeText={setCity}
            />

            <RectButton
              style={styles.button}
              onPress={handleNavigationToPoints}
            >
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" color="#f1faee" size={24} />
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f1faee',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#1d3557',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#457b9d',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#a8dadc',
    color: '#457b9d',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#e63946',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#f1faee',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginLeft: -60,
  },
});

export default Home;
