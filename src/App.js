import "./App.css";
import WholeContent from "./components/WholeContent/WholeContent";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
function App() {
    const {i18n} = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('lang'))
    },[])
  return (
    <div>
      <WholeContent />
    </div>
  );
}

export default App;
