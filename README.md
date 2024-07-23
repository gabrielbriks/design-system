# design-system

Projeto para aprendizado prático de Design System

## Components

* \[ ] Text
* \[ ] Heading
* \[ ] Box
* \[ ] Button
* \[ ] TextInput
* \[ ] TextArea
* \[ ] Checkbox
* \[ ] Avatar
* \[ ] MultiStep

## Observações

* O projeto estará sendo dividido em pacotes, pensando nisso o projeto seguirá a estrutura de exemplo abaixo:

```plain

packages:
  | tokens
    | package.json
  | react
    | package.json
```

### Pacote Tokens

* Temos a seguinte estrutura:

```plain
tokens
  | src
    - index.ts [Aqui no `index.ts` iremos reexportar o que tem dentro de tokens, que nesse exemplo só possuí o colors]
    - colors.ts
package.json

```

* A motivação para a existência do arquivo `index.ts` se da pelo fator de que toda vez que formos importar um *token*, será possivel importa-lo da seguinte maneira.

  ```ts
  import { colors } from "@morais-ui/tokens/colors";
  ```

  Ao invés disso, com o index poderemos importar o token da seguinte forma

  ```ts
  import { colors } from "@morais-ui/tokens";
  ```

### warning: Sempre utilizar unidade de medidas relativas na web

* É muito importante sempre utilizamos unidades de medidas relativas(`rem`), pois pixels(`px`) são unidades absolutas e não podem ser alteradas dce acordo com as preferências do usuário.
  * Unico momento que iremos utilizar a unidade `px` será no momento que precisarmos garantir que valor permaneça absoluto. Como por exemplo no BorderRadius

* Nesse caso podemos utilizar como padrão da web que cada `1rem` equivale a `16px`

## Build do pacote com TSUP

* Utilizar o `tsup` para buildar nosso pacotes nos trás alguns benefícios, que além de ser performático, nos possibilita gerar as build em diversos formatos diferentes, e também as definições de tipagens

  * Em nosso caso vamos gerar dois formados, sendo um formato em commonJS e outro em modulesJS

* Exemplo do comando com dentro do cenario do projeto:

  ```shell
  tsup src/index.ts --format esm,cjs --dts

  ```

## Configurações de Monorepos

### Monorepo

É uma estratégia de desenvolvimento de software em que o código-fonte de vários projetos é armazenado no mesmo repositório.

* Monorepo é o conceito de colocar vários projetos em um único repositório de código
* É útil quando os projetos são dependentes entre si
* Permite trabalhar em vários projetos dentro da mesma estrutura e ao mesmo tempo
* Não é necessário publicar os projetos no NPM para fazer alterações entre eles

#### Algumas características e vantagens importantes:

* **Reúso de código**: Funcionalidades semelhantes ou protocolos de comunicação podem ser abstraídos em bibliotecas compartilhadas e incluídos diretamente por projetos, sem a necessidade de um gerenciador de pacotes de dependência.

* **Gerenciamento simplificado** de dependências: Em ambientes com vários repositórios, onde vários projetos dependem de uma mesma biblioteca, essa dependência pode ser baixada ou construída várias vezes. Em um monorepo, a compilação pode ser otimizada, pois as dependências referenciadas existem no mesmo código-fonte.

* **Commits atômicos**: Quando projetos que trabalham juntos estão em repositórios separados, as versões precisam ser sincronizadas para garantir que funcionem bem juntos. Em projetos grandes, gerenciar versões compatíveis entre dependências pode se tornar complicado. Em um monorepo, esse problema pode ser evitado, pois os desenvolvedores podem alterar vários projetos de forma atômica.

* **Refatoração em grande escala**: Como os desenvolvedores têm acesso ao projeto inteiro, refatorações podem garantir que cada parte do projeto continue funcionando após a alteração.

* **Colaboração entre equipes**: Em um monorepo que usa dependências de código-fonte, equipes podem melhorar projetos em que outras equipes estão trabalhando, o que leva a uma propriedade de código flexível.

* *No entanto, existem algumas desvantagens, como a perda de informações de versão específicas para cada projeto e a falta de controle de acesso específico para cada projeto. Mesmo assim, muitas empresas, como Google, Meta, Microsoft, Uber, Airbnb e Twitter, usam monorepos com sucesso para gerenciar grandes volumes de código e mudanças diárias*
