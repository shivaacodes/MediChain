import { useState, useRef } from "react";
import Webcam from "react-webcam";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; // Hardhat example
const contractABI = [
  {
    inputs: [{ internalType: "string", name: "qrCode", type: "string" }],
    name: "verifyDrug",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
const privateKey =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; // Hardhat test key
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export default function Scan() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const capture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) return;

    const formData = new FormData();
    const blob = await fetch(imageSrc).then((res) => res.blob());
    formData.append("image", blob, "qrcode.jpg");

    const response = await fetch("http://localhost:5000/api/scan", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.qr_code) {
      setQrCode(data.qr_code);
      await verifyQrCode(data.qr_code);
    } else {
      setResult("No QR code detected");
    }
  };

  const verifyQrCode = async (qrCode: string) => {
    try {
      const isVerified = await contract.verifyDrug(qrCode);
      setResult(isVerified ? "Verified" : "Unverified");
    } catch (error) {
      console.error("Verification failed:", error);
      setResult("Error verifying QR code");
    }
  };

  return (
    <div className="p-4 bg-background text-foreground min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-poppins text-primary mb-6">Scan QR Code</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="mt-4 rounded-lg max-w-full"
        width={640}
        height={480}
      />
      <button className="btn mt-6" onClick={capture}>
        Capture QR Code
      </button>
      {qrCode && (
        <p className="mt-4 text-muted-foreground">QR Code: {qrCode}</p>
      )}
      {result && (
        <p
          className={`mt-4 font-inter text-lg ${
            result === "Verified" ? "text-primary" : "text-destructive"
          }`}
        >
          Result: {result}
        </p>
      )}
    </div>
  );
}
