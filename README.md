# design-system

Projeto para aprendizado prático de Design System

## Aprendizados

* \[x] Conceito e utilização de design system
* \[ ] Conceito e utilização prática do Storybook
* \[ ] Conceito e utilização prática de monorepos
* \[ ] Utilização prática do Stitches para construção de componentes react

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
    | *Destinado a armazenar todos os tokens globais do design system*
  | react
    | *Diretorio destinado a construção dos componentes react*
  | docs
    | *Diretorio destinado a implementação do storybook*
  | eslint-config
    | *Utilizado para centralizar as configurações do eslint para todos os pacotes*
  | ts-config
    | *Utilizado para concentrara as configurações do typescript para todos os pacotes*
```

### Pacote Tokens

* Inicialmente temos a seguinte estrutura:

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

### Configuração

* Inicialemnte será implementado o uso das workspaces do `npm` seguindo a estrutura utilizada no **`turboRepo`** para que ele seja implementado no futuro.
