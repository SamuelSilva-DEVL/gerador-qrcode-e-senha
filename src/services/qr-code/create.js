import prompt from 'prompt'

import promptSchemaQRCode from '../../prompts-schema/prompt-schema-qrcode.js'
import handle from './handle.js'

async function createQrCode(qrCode) {
    prompt.get(promptSchemaQRCode, handle)
}

export default createQrCode