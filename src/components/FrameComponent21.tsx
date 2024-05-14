import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./FrameComponent21.module.css";

const FrameComponent21: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.inputParent}>
        <TextField
          className={styles.input}
          placeholder="First Name"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { color: "#d2cece" },
          }}
        />
        <TextField
          className={styles.input1}
          placeholder="Last name"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { color: "#d2cece" },
          }}
        />
      </div>
      <TextField
        className={styles.input2}
        placeholder="Enter your email"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "56px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          },
          "& .MuiInputBase-input": { color: "#d2cece" },
        }}
      />
      <TextField
        className={styles.input3}
        placeholder="Phone"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "56px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          },
          "& .MuiInputBase-input": { color: "#d2cece" },
        }}
      />
      <textarea
        className={styles.input4}
        placeholder="Message"
        rows={8}
        cols={33}
      />
      <Button
        className={styles.button}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#2e2d2d",
          borderRadius: "8px",
          "&:hover": { background: "#2e2d2d" },
          height: 56,
        }}
      >
        Send Message
      </Button>
    </div>
  );
};

export default FrameComponent21;
