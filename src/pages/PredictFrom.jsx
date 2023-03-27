import { useState } from "react";
import "./../../styles/globals.css";
import "./../App.css";
import styles from "./../../styles/Home.module.css";
import useFetch, { useMutate } from "./../hooks/useFetch";
import { Autocomplete, Box, Button, Divider, Textarea, Typography } from "@mui/joy";

const PredictFrom = () => {
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
    <div className={styles.center}>
          <Typography
          variant="h1"
          sx={{ textAlign: "center", mb: 2, fontSize: 24 }}
        >
          Phone Price Prediction  
        </Typography>
        <Divider sx={{ mb: 5 }} />
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
        <Button
          onClick={() => predict()}
          disabled={
            !brand || !selectedModel || !selectedStorage || !selectedCondition
          }
        >
          Predict{" "}
        </Button>
        <Textarea
          name="Solid"
          placeholder="Result here"
          variant="solid"
          value={prediction + " DH"}
        />
      </Box>
    </div>
  );
};

export default PredictFrom;
