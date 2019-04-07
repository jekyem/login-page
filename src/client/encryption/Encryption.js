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

        const decipher = crypto.createDecipher('aes-256-cbc', 'key');
        let decryptedData = decipher.update(encrypedData,'base64','utf8');
        decryptedData = decryptedData + decipher.final('utf8');

        console.log(encrypedData);
        console.log(decryptedData);

        return encrypedData;
    }

    getRandomKey = () => {
        return crypto.randomBytes(32).toString('base64');
    }
}

export default new Encryption();