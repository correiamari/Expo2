import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerLogin = async () => {
    try {
      await signInWithEmailAndPassword(autenticacao, email, senha);
      setErro('');
    } catch (erro) {
      setErro('Erro ao fazer login. Verifique seus dados.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={estilos.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={estilos.fundo}>
        <View style={estilos.decoracao}>
          <View style={estilos.decoracaoTopo} />
          <View style={estilos.decoracaoBase} />
        </View>

        <View style={estilos.card}>
          <View style={estilos.iconeContainer}>
            <Text style={estilos.icone}>👤</Text>
          </View>
          <Text style={estilos.titulo}>LOGIN</Text>

          <Text style={estilos.label}>Email</Text>
          <TextInput
            style={estilos.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Digite seu email"
            placeholderTextColor="#b99aac"
            autoCapitalize="none"
          />

          <Text style={estilos.label}>Senha</Text>
          <TextInput
            style={estilos.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            placeholder="Digite sua senha"
            placeholderTextColor="#b99aac"
          />

          <TouchableOpacity style={estilos.botao} onPress={fazerLogin} activeOpacity={0.85}>
            <Text style={estilos.botaoTexto}>ENTRAR</Text>
          </TouchableOpacity>

          {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

          <TouchableOpacity style={estilos.botaoCadastro} onPress={() => navigation.navigate('Cadastro')} activeOpacity={0.7}>
            <Text style={estilos.cadastroTexto}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#5f203f',
  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  decoracao: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '40%',
    backgroundColor: '#7f3e68',
    borderTopRightRadius: 48,
    borderBottomRightRadius: 48,
    overflow: 'hidden',
  },
  decoracaoTopo: {
    position: 'absolute',
    top: 40,
    left: -40,
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: '#bf6b90',
  },
  decoracaoBase: {
    position: 'absolute',
    bottom: 60,
    left: -70,
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: '#d38aa8',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 28,
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    zIndex: 1,
  },
  iconeContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#f5d5e3',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  icone: {
    fontSize: 32,
  },
  titulo: {
    textAlign: 'center',
    color: '#5f203f',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 24,
  },
  label: {
    color: '#6d4a6f',
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 4,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#faf5f8',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#3d2a3f',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#f0dde7',
  },
  botao: {
    backgroundColor: '#c85c91',
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  erro: {
    color: '#b00020',
    textAlign: 'center',
    marginBottom: 12,
  },
  botaoCadastro: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  cadastroTexto: {
    color: '#7d4b73',
    fontSize: 15,
    fontWeight: '600',
  },
});