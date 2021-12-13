import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { APIError } from 'src/error';

@Injectable()
export class QrService {
  public async generate(url: string) {
    let opts: QRCode.QRCodeToDataURLOptions = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      margin: 1,
      scale: 6,
      color: {
        dark: '#2b2080FF',
        light: '#9d99baFF',
      },
    };
    
    return new Promise<string>((res, rej) => {
      QRCode.toDataURL(url, opts, (err, src) => {
        if(err) throw new APIError("QRCODE_GENERATION");
        
        res(src);
      });
    })
  }
}
