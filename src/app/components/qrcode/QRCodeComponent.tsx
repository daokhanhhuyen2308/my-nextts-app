"use client";

import QRCode from "react-qr-code";

const QRCodeComponent = () => {
  const instagramURL = "daoookhanhuyenn";

  return (
    <div>
      <QRCode
        value={instagramURL}
        size={200}
        level="Q"
        bgColor="#FFFFFF"
        fgColor="#000000"
      />
    </div>
  );
};

export default QRCodeComponent;
