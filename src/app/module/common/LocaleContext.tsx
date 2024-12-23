import { createContext, useContext } from "react";

const LocaleContext = createContext("en"); // Default locale

export const useLocale = () => useContext(LocaleContext);
