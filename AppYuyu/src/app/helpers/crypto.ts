import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
const secret = 'b72e2e77-d852-4154-8976-b00707e3445d';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  Encrypt(text: string) {
    return crypto.AES.encrypt(text.toString(), secret).toString();
  }
  Decrypt(text: string) {
    return crypto.AES.decrypt(text, secret).toString(crypto.enc.Utf16);
  }
}
