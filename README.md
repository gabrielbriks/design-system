# design-system

Projeto para aprendizado prático de Design System

## Components

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep

## Observações

- O projeto estará sendo dividido em pacotes, pensando nisso o projeto terá a seguinte estrutura

```plain

packages:
  | tokens
    | package.json
```

### Pacote Tokens

- Temos a seguinte estrutura:

```plain
tokens
  | src
    - index.ts [Aqui no `index.ts` iremos reexportar o que tem dentro de tokens, que nesse exemplo só possuí o colors]
    - colors.ts
package.json

```

- A motivação para a existência do arquivo `index.ts` se da pelo fator de que toda vez que formos importar um _token_, será possivel importa-lo da seguinte maneira.

  ```ts
  import { colors } from "@morais-ui/tokens/colors";
  ```

  Ao invés disso, com o index poderemos importar o token da seguinte forma

  ```ts
  import { colors } from "@morais-ui/tokens";
  ```

## Sempre utilizar unidade de medidas relativas na web

- É muito importante sempre utilizamos unidades de medidas relativas(`rem`), pois pixels(`px`) são unidades absolutas e não podem ser alteradas dce acordo com as preferências do usuário.
  - Unico momento que iremos utilizar a unidade `px` será no momento que precisarmos garantir que valor permaneça absoluto. Como por exemplo no BorderRadius

- Nesse caso podemos utilizar como padrão da web que cada `1rem` equivale a `16px`


