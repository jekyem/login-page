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
    decryptionRSA = (data, key) => {

    }
    decryptionAES = (data, key) => {
        const decipher = crypto.createDecipher('aes-256-cbc', key);
        const decryptedData = decipher.update(data,'base64','utf8');
        return decryptedData + decipher.final('utf8');
        
    }
}

export default new Encryption();