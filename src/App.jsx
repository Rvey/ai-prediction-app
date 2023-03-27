import "./../styles/globals.css";
import "./App.css";
import styles from "./../styles/Home.module.css";
import { Box, Button } from "@mui/joy";
import { Route, Routes, useNavigate } from "react-router-dom";
import PredictFrom from "./pages/PredictFrom";
import DataVisualization from "./pages/DataVisualization";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <main className={styles.main}>
        <Box sx={{display:"flex" , justifyContent: "space-between" , width: "100%" , gap: 30}}>
          <div>
            <a target="_blank" rel="noopener noreferrer">
              By switchy
            </a>
        
          </div>
          
          <Box display={"flex"} gap={1}>
            <Button onClick={() => navigate("/")}>
              Phone Price Prediction
            </Button>
            <Button onClick={() => navigate("/dataVP")}>
              Data visualization
            </Button>
          </Box>
        </Box>
        <Routes>
          <Route path="/" element={<PredictFrom />} />
          <Route path="/dataVP" element={<DataVisualization />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
