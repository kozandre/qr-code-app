import { SCAN_DATA } from '../constants'
import { QRCodeSVG } from 'qrcode.react';
export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  return (
    <div>
      {data.map((text) => (
        <p key={text}>
          <QRCodeSVG value={text} size={100}/>
          {text}
        </p>

      ))}
    </div>
  );
}