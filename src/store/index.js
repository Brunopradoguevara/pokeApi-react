import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slice.js"
const savedName = JSON.parse(localStorage.getItem("trainerName")) || {};

const store = configureStore ({
    reducer: {
        trainer
    },
      preloadedState: savedName,
})

store.subscribe(() => {
  localStorage.setItem("trainerName", JSON.stringify(store.getState()));
});

export default store