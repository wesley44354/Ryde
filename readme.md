# 🚗 Ryde Clone — Expo Router + NativeWind + Web Support

> Projeto baseado no tutorial [JavaScript Mastery](https://www.youtube.com/watch?v=kmy_YNhl0mw&ab_channel=JavaScriptMastery), utilizando **Expo Router** e **NativeWind**, com diversas melhorias e adaptações pessoais.

---

## 📱 Descrição

Este é um clone do aplicativo de transporte **Ryde**, inspirado no design do [Figma oficial](https://www.figma.com/design/sYYXxLpiyU7CkvRljZzCRH/Ryde---Uber-Clone-App?node-id=67003-8516&t=Pae5sZMJtAaGXQsF-0). Estou utilizando esse projeto como base para:

- Aprender e aplicar **Expo Router** com navegação declarativa
- Usar **NativeWind** (Tailwind para React Native)
- Suporte total ao **tema escuro**
- Funcionar bem na **web** (responsivo via `expo-router`)
- Implementar **i18n (internacionalização)**
- Criar uma estrutura sólida com **autenticação personalizada**

---

## 🧑🏽‍💻 Tecnologias e Ferramentas

- [Expo Router](https://expo.dev/router)
- [NativeWind](https://www.nativewind.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [i18next](https://www.i18next.com/) para internacionalização
- Tema escuro baseado em `useColorScheme`
- Suporte para plataforma **web**

---

## 🛠 Funcionalidades em desenvolvimento

- [x] Navegação com Expo Router
- [x] Suporte ao tema escuro
- [x] Estilização com NativeWind
- [x] Suporte completo para Web
- [x] Configuração de i18n
- [x] Sistema de autenticação
- [ ] Integração com APIs externas
- [ ] Tela de mapa com localização em tempo real

---

## 🧪 Como Rodar o Projeto

# Clone o repositório

git clone https://github.com/wesleyalvesdeveloper99/Ryde.git
cd Ryde

# Instale as dependências

yarn install

# Configuração do Projeto

## Dentro do arquivo ./constants/appConfig.ts, você precisará configurar algumas informações do projeto, incluindo variáveis de ambiente. Exemplo de configuração:

```bash
 export default {
  name: "#####",  // Nome do aplicativo
  slug: "#####",  // Slug do projeto (utilizado no Expo)
  owner: "#####",  // Proprietário do projeto
  version: "1.0.0",  // Versão do aplicativo
  runtimeVersion: "1.0.0",  // Versão de runtime (necessário no Expo)
  identifier: "#####",  // Identificador único do app (geralmente utilizado no Android/iOS)
  extra: {
     // Adcionar no site expo, no seu projeto em Variáveis ​​de ambiente
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY, // Chave pública do Clerk
    eas: {
      projectId: "#####",  // ID do projeto no Expo Application Services (EAS)
    },
  },
};
```

# Rode o eas env:pull para adicionar o .env.local

yarn env

# Rode no Expo

yarn start

---

> Desenvolvido com 💻 por Wesley Alves.

