# Medical Report Analysis - X-Ray Analysis

## Overview
Medical Report Analysis is a web-based application designed to analyze and interpret X-ray images. This project integrates deep learning and modern web technologies, featuring a React-based frontend and a deployed machine learning backend. The system leverages a pre-trained model for medical image classification, enhancing diagnostic capabilities with real-time predictions.

## Features
- **X-ray Image Upload**: Upload X-ray images for analysis via the React interface.
- **Deep Learning Model Integration**: Utilizes a trained `.h5` model to classify medical images, accessible via the live backend API.
- **Interactive Web Interface**: User-friendly React-based application for seamless interaction.
- **Visualization**: Displays analyzed results with insightful information.
- **Secure Storage**: Manages uploaded files securely through the backend.
- **Live Deployment**: Fully functional application with connected frontend and backend.

## Project Structure
```
├── public/                  # Static assets (images, etc.)
├── src/                     # React source code
│   ├── components/          # React components
│   ├── pages/               # Page components
│   ├── App.js               # Main React app entry
│   ├── index.js             # React DOM rendering
├── uploads/                 # Directory to store uploaded X-ray images (handled by backend)
├── model.h5                 # Trained deep learning model (hosted on backend)
├── requirements.txt         # Backend dependencies
├── vercel.json              # Configuration for Vercel deployment
├── README.md                # Project documentation
├── X_RAY.ipynb              # Jupyter notebook for model training
```

## Installation and Setup
### Frontend (React)
1. Clone the repository:
   ```bash
   git clone https://github.com/divyanshsaxena21/X-Ray_Analysis.git
   cd X-Ray_Analysis
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   Access the application locally at `http://localhost:3000`.

### Backend (ML)
- The backend is already deployed and running live. No local setup is required for the ML component.
- Ensure the React app is configured to connect to the live backend API endpoint (e.g., `https://your-backend-api.vercel.app`).

## Usage
1. Open the web application at `http://localhost:3000` (local) or the live URL (e.g., `medicure.ayushsharma.site`).
2. Upload an X-ray image (supported formats: `.jpg`, `.png`, `.jpeg`).
3. Click on the "Analyze" button.
4. View the prediction results and insights on the results page.

## Technologies Used
- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Python (Flask or similar), TensorFlow/Keras
- **Deployment**: Vercel (for both frontend and backend)
- **Notebook**: Jupyter Notebook for model training and testing

## Model Details
- The `model.h5` file is a deep learning model trained on medical X-ray datasets.
- It utilizes convolutional neural networks (CNNs) for feature extraction and classification.
- Training details are available in the `X_RAY.ipynb` file.
- The model is hosted on the live backend and accessed via API calls.

## Deployment
- The application is deployed using Vercel, with the React frontend and ML backend connected and working live.
- Update the `vercel.json` file for custom deployment configurations if needed.
- Live URL: [medicure.ayushsharma.site](https://medicure.ayushsharma.site/)

## Screenshots
Include screenshots of the React interface and prediction results to give users a visual idea of the project. (Add images to the `public` folder and reference them here, e.g., `![Screenshot](/screenshot1.png)`.)

## Contributing
Contributions are welcome! Please follow the steps below:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements
- Inspiration from advancements in medical image processing.
- Dataset and resources used for training the model.
- Thanks to the team for the React and ML integration.

## Topics
html, react, machine-learning, x-ray

## Resources
- [Readme](README.md)
- [Activity](https://github.com/divyanshsaxena21/X-Ray_Analysis/graphs/commit-activity)
- [Stars](https://github.com/divyanshsaxena21/X-Ray_Analysis/stargazers)
- [Watchers](https://github.com/divyanshsaxena21/X-Ray_Analysis/watchers)
- [Forks](https://github.com/divyanshsaxena21/X-Ray_Analysis/network/members)
- [Releases](https://github.com/divyanshsaxena21/X-Ray_Analysis/releases)

## Languages
- JavaScript: ~50% (React frontend)
- CSS: ~20%
- HTML: ~15%
- Python: ~15% (backend/ML)