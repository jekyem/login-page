import crypto from 'crypto';

class Encryption {
    encryptionRSA = (stringData, key) => {
        const dataBuffer = Buffer.from(stringData,'utf8');
        return crypto.publicEncrypt(key,dataBuffer).toString('base64');
    }

    encryptionAES = (stringData, key) => {
        const cipher = crypto.createCipher('aes-256-cbc',key);
        const encrypedData = cipher.update(stringData,'utf8','base64');
        return encrypedData + cipher.final('base64');
    }

    getRandomValue = () => {
        return crypto.randomBytes(32).toString('base64');
    }
}

export default new Encryption();