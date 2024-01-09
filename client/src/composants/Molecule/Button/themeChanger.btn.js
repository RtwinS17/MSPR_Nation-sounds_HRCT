import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateTheme } from "../../../appStore/slices/themeSlice";
import { DarkIcon } from "../Icon/lightModeIcon.component";
import { LightIcon } from "../Icon/darkModeIcon.component";

import './themeChanger.btn.style.css';

export const ThemeBtn = () => {
  const dispatch = useDispatch()
  let theme = useSelector(store => store.theme.value)

  
    return (
    <>
    <button className="btn-accent theme-btn fixed top-5 right-4 z-[20]" onClick={() => dispatch(updateTheme())}>
      {theme === 'day' ? <DarkIcon id="darkIcon-id"/> : <LightIcon id="lightIcon-id"/> }
    </button>
  
    </>
)
}