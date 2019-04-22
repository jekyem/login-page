import fs from 'fs';
import crypto from 'crypto';

class Encryption {
    constructor(){
        this.key = {
            private:this.readFile(__dirname + '/key/private.pem'),
            public:this.readFile(__dirname + '/key/public.pem')
        }
    }

    readFile = (keyFile) => (fs.readFileSync(keyFile,'utf8'));
    getPublicKey = () => (this.key.public);
    decryptionPrivateRSA = (data) => {
        return crypto.privateDecrypt(this.key.private,Buffer.from(data,'base64')).toString();
    }
    decryptionAES = (data, key) => {
        const decipher = crypto.createDecipher('aes-256-cbc', key);
        const decryptedData = decipher.update(data,'base64','utf8');
        return decryptedData + decipher.final('utf8');
    }
    getRandomValue = () => {
        return crypto.randomBytes(32).toString('base64');
    }
    makeHash = (data, salt) => {
        return crypto.scryptSync(data, salt, 64).toString('base64');
    }
}

export default new Encryption();