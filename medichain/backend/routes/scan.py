# Handles barcode decoding with OpenCV + pyzbar

from flask import Blueprint, request
from pyzbar.pyzbar import decode
from PIL import Image  # pillow lib
import io

scan_bp = Blueprint("scan", __name__)


@scan_bp.route("/scan", methods=['POST'])
def scan_qr_code():
    if "image" not in request.files:
        return {"error": "No image provided"}, 400

    image_file = request.files['image']
    image = Image.open(image_file)
    results = decode(image)

    if results and results[0].type == "QRCODE":
        qr_data = results[0].data.decode("utf-8")  # eg; MED123 (6-Byte)
        return {"qr_code": qr_data}
    return {"error": "No QR Code Found"}, 400
