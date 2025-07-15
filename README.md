# 🩺 Medical Report Analysis

An AI-powered web application that analyzes **X-ray images** to predict medical conditions such as **COVID-19**, **Pneumonia**, and **Tuberculosis**, and provides a diagnostic report in real-time.

---

## 🚀 Live Demo

👉 [medical-report-snowy.vercel.app](https://medical-report-snowy.vercel.app)

---

## 🧠 Features

- Upload chest X-ray images for analysis  
- AI model trained to detect:
  - COVID-19
  - Pneumonia
  - Tuberculosis
  - Normal
- Instant results with high accuracy  
- Clean, responsive frontend interface  
- Powered by Hugging Face model hosting and TensorFlow  

---

## 🖼 Sample Prediction Flow

1. User uploads an X-ray image  
2. FastAPI backend loads a pre-trained model from Hugging Face  
3. The image is resized, normalized, and passed through the model  
4. The predicted class is returned and displayed on the frontend  

---

## 🧩 Tech Stack

### Frontend
- ⚛️ React (Vercel hosted)
- TailwindCSS (if used)
- Axios for API communication

### Backend
- 🐍 Python with FastAPI  
- TensorFlow (model inference)  
- Hugging Face Hub (`hf_hub_download`)  
- PIL and NumPy for image preprocessing  
- CORS support for React communication

---
