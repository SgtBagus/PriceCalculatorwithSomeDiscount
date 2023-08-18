import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PriceCalculator from "./Components/PriceCalculator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PriceCalculator />
  </StrictMode>
);
