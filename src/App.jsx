import { useState } from 'react'
import './../styles/globals.css'
import './App.css'
import styles from "./../styles/Home.module.css";
import useFetch, { useMutate } from './hooks/useFetch';
import { Autocomplete, Box, Button, Textarea } from '@mui/joy';
function App() {
  const [count, setCount] = useState(0)

  const [brand, setBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const { data, isPending, error } = useFetch(
    "https://walrus-app-gtnj5.ondigitalocean.app/brands"
  );
  const {
    data: model,
    isPending: modelPending,
    error: modelError,
  } = useFetch(
    `https://walrus-app-gtnj5.ondigitalocean.app/models?brand=${brand}`
  );
  const {
    data: storage,
    isPending: storagePending,
    error: storageError,
  } = useFetch("https://walrus-app-gtnj5.ondigitalocean.app/storage");
  const {
    data: condition,
    isPending: conditionPending,
    error: conditionError,
  } = useFetch("https://walrus-app-gtnj5.ondigitalocean.app/condition");

  const { prediction, predict } = useMutate(
    "https://walrus-app-gtnj5.ondigitalocean.app/predict",
    brand,
    selectedModel,
    selectedStorage,
    selectedCondition
  );
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
            >
              By switchy
            </a>
            Phone Price Predict
          </div>
          <Box display={"flex"} gap={1}>
            <Button onClick={function () {}}>
              Cars Price Prediction (Wip){" "}
            </Button>
            <Button onClick={function () {}}>Data visualization (Wip) </Button>
          </Box>
        </div>

        <div className={styles.center}>
          <Box display={"flex"} flexDirection={"column"} gap={3}>
            <Autocomplete
              placeholder="select Brand"
              options={data || []}
              getOptionLabel={(option) => option.label}
              onChange={(event, newValue) => {
                setBrand(newValue?.label || "");
              }}
              sx={{ width: 300 }}
            />
            <Autocomplete
              placeholder="select Model"
              options={model || []}
              disabled={!brand}
              getOptionLabel={(option) => option.label}
              onChange={(event, newValue) => {
                setSelectedModel(newValue?.label || "");
              }}
              sx={{ width: 300 }}
            />
            <Autocomplete
              placeholder="select Storage"
              options={storage || []}
              getOptionLabel={(option) => option.label}
              onChange={(event, newValue) => {
                setSelectedStorage(newValue?.label || "");
              }}
              sx={{ width: 300 }}
            />
            <Autocomplete
              placeholder="select Condition"
              options={condition || []}
              getOptionLabel={(option) => option.label}
              onChange={(event, newValue) => {
                setSelectedCondition(newValue?.label || "");
              }}
              sx={{ width: 300 }}
            />
            <Button onClick={() => predict()}
            disabled={!brand || !selectedModel || !selectedStorage || !selectedCondition}
            >Predict </Button>
            <Textarea
              name="Solid"
              placeholder="Result here"
              variant="solid"
              value={prediction + " DH"}
            />
          </Box>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}

export default App
