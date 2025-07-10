from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from huggingface_hub import hf_hub_download
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

app = FastAPI()

# Enable CORS for all origins (you can restrict to your Vercel frontend domain)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use ["https://your-frontend.vercel.app"] in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model from Hugging Face (cached automatically)
model_path = hf_hub_download(
    repo_id="DVS21/Chest_X-Ray",  # your HF repo
    filename="model.h5",
    repo_type="model"
)
model = load_model(model_path, compile=False)

# Your class labels (update if changed)
labels = ["COVID-19", "Pneumonia", "Normal", "Tuberculosis"]

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    image = image.resize((150, 150))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)

    prediction = model.predict(image)
    predicted_class = labels[np.argmax(prediction)]
    return {"prediction": predicted_class}
