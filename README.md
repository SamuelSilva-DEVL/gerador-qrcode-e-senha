# Gerador de QR Code e Senhas via Terminal

Este projeto é uma aplicação simples desenvolvida em Node.js para geração de QR Codes e senhas diretamente pelo terminal. O objetivo é fornecer uma ferramenta prática para criar rapidamente QR Codes e senhas seguras, personalizáveis via variáveis de ambiente.

## Bibliotecas Utilizadas

- **chalk**: Para estilização de textos no terminal.
- **prompt**: Para interação com o usuário via terminal (inputs dinâmicos).
- **qrcode-terminal**: Para geração e exibição de QR Codes diretamente no terminal.

## Uso de Variáveis de Ambiente (.env)

O projeto utiliza variáveis de ambiente para personalizar a geração de senhas. Crie um arquivo `.env` na raiz do projeto com as seguintes opções:

```env
# Define o tamanho da senha gerada
PASSWORD_LENGTH=12
# Define se deve incluir letras maiúsculas
UPPERCASE_LETTERS=true
# Define se deve incluir letras minúsculas
LOWERCASE_LETTERS=true
# Define se deve incluir números
NUMBERS=true
# Define se deve incluir caracteres especiais
SPECIAL_CHARACTERS=true
```

Ajuste os valores conforme sua necessidade.

## Arquitetura do Projeto

```
├── src
│   ├── index.js                  # Ponto de entrada da aplicação
│   ├── prompts-schema/           # Schemas para prompts do terminal
│   │   ├── prompt-schema-main.js
│   │   └── prompt-schema-qrcode.js
│   └── services/
│       ├── password/             # Lógica de geração de senhas
│       │   ├── create.js
│       │   ├── handle.js
│       │   └── utils/
│       │       └── permitted-characters.js
│       └── qr-code/              # Lógica de geração de QR Codes
│           ├── create.js
│           └── handle.js
```

- **index.js**: Inicializa o prompt principal e direciona para geração de QR Code ou senha.
- **prompts-schema/**: Define os schemas de perguntas para o usuário.
- **services/password/**: Responsável pela lógica de geração de senhas, utilizando as variáveis de ambiente para definir os critérios.
- **services/qr-code/**: Responsável pela lógica de geração de QR Codes.

## Como Clonar e Utilizar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/SamuelSilva-DEVL/gerador-qrcode-e-senha.git
cd gerador-qrcode-e-senhas
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o arquivo `.env`:**

Crie um arquivo `.env` na raiz do projeto conforme o exemplo acima.

4. **Execute a aplicação:**

```bash
npm run start:dev
```

5. **Siga as instruções no terminal para gerar QR Codes ou senhas.**
