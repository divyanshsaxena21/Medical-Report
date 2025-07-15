# 🏥 **Medical Report Analysis - X-Ray Analysis** 🩻

## Overview

**Medical Report Analysis** is a web-based application designed to analyze and interpret X-ray images. By integrating deep learning with modern web technologies, this project features a **React-based frontend** and a **deployed machine learning backend**. It leverages a **pre-trained model** for medical image classification, enhancing diagnostic capabilities with real-time predictions.

The application allows users to upload X-ray images, analyze them using a machine learning model, and view detailed insights and predictions about the medical condition represented in the images

## Features ✨

* **X-ray Image Upload**: Users can upload X-ray images for analysis via the React interface.
  ![X-ray Upload](public/xray-upload.png)
* **Deep Learning Model Integration**: The backend uses a trained `.h5` model to classify medical images, which is accessible through an API.
  ![Deep Learning Model](public/model-integration.png)
* **Interactive Web Interface**: The web application provides a seamless and user-friendly interface, built with React.
  ![Web Interface](public/web-interface.png)
* **Visualization**: After uploading an image, the system displays detailed analysis and insights, providing a clear understanding of the results.
  ![Visualization](public/visualization.png)
* **Secure Storage**: Uploaded X-ray images are securely managed and stored through the backend.
  ![Secure Storage](public/secure-storage.png)
* **Live Deployment**: The project is fully deployed and connected, with both the frontend and backend working live in a production environment.
  ![Live Deployment](public/live-deployment.png)

## Technologies Used 🛠️

* **Frontend**: React, HTML, CSS, JavaScript
* **Backend**: Python (Flask or similar), TensorFlow/Keras
* **Deployment**: Vercel (for both frontend and backend)
* **Notebook**: Jupyter Notebook for model training and testing

## Model Details 📊

* The `model.h5` file is a deep learning model trained on medical X-ray datasets. It uses **convolutional neural networks (CNNs)** for feature extraction and classification.
* The model can detect medical conditions from X-ray images and return relevant insights and predictions.
* Full training details and model architecture are available in the `X_RAY.ipynb` notebook file.
* The model is hosted on the live backend and accessed via API calls for real-time predictions.

## Screenshots 📸

Here are some screenshots of the application to give you a visual idea of the interface and results:

<img width="1919" height="977" alt="image" src="https://github.com/user-attachments/assets/ef6c0300-9c2d-4c71-82f6-54a568e6e98a" />

<img width="1919" height="972" alt="image" src="https://github.com/user-attachments/assets/e01b9c95-3176-4f8a-b289-c2f0e27473ac" />

## Deployment 🌍

* The application is fully deployed and available for use at [medicure.ayushsharma.site](https://medicure.ayushsharma.site/).
* The React frontend and ML backend are live, connected, and operational.

## Acknowledgements 🙏

* Inspiration from advancements in medical image processing.
* Datasets and resources used for training the model.
* Thanks to the community for React and machine learning model development.
