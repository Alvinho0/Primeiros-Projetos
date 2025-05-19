/**
 * Arquivo de configuração de navegação da aplicação
 * Define as rotas e a estrutura de navegação do app
 */

// Importação das bibliotecas necessárias
import React from 'react';
// Importação do NavigationContainer que gerencia o estado de navegação
import { NavigationContainer } from '@react-navigation/native';
// Importação do createNativeStackNavigator para criar a navegação em pilha
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das telas da aplicação
import HomeScreen from '../screens/HomeScreen';
import AgendamentoScreen from '../screens/AgendamentoScreen';
import ServicosScreen from '../screens/ServicosScreen';
import PerfilScreen from '../screens/PerfilScreen';
import AgendamentosScreen from '../screens/AgendamentosScreen';

// Criação do navegador em pilha
const Stack = createNativeStackNavigator();

/**
 * Componente de navegação principal
 * Define todas as rotas da aplicação e suas configurações
 */
const AppNavigator = () => {
  return (
    // Container de navegação que envolve toda a navegação da aplicação
    <NavigationContainer>
      {/* Navegador em pilha que gerencia as telas */}
      <Stack.Navigator
        // Tela inicial da aplicação
        initialRouteName="Home"
        // Configurações padrão para todas as telas
        screenOptions={{
          // Estilo do cabeçalho
          headerStyle: {
            backgroundColor: '#1a1a1a', // Cor de fundo do cabeçalho
          },
          headerTintColor: '#fff', // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontWeight: 'bold', // Estilo do título do cabeçalho
          },
        }}
      >
        {/* Tela inicial - Home */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Barbearia' }}
        />
        {/* Tela de agendamento */}
        <Stack.Screen 
          name="Agendamento" 
          component={AgendamentoScreen} 
          options={{ title: 'Agendar Horário' }}
        />
        {/* Tela de serviços */}
        <Stack.Screen 
          name="Servicos" 
          component={ServicosScreen} 
          options={{ title: 'Nossos Serviços' }}
        />
        {/* Tela de perfil */}
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Meu Perfil' }}
        />
        {/* Tela de agendamentos */}
        <Stack.Screen 
          name="Agendamentos" 
          component={AgendamentosScreen} 
          options={{ title: 'Meus Agendamentos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 