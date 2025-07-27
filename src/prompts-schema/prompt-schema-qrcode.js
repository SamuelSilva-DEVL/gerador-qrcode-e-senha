import chalk from 'chalk'

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Insira o link para gerar o QRCode"),
        required: true
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha o tipo de QRCode (1 - NORMAL ou 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    },
]

export default promptSchemaQRCode