import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateTheme } from "../../../appStore/slices/themeSlice";
import { DarkIcon } from "../Icon/lightModeIcon.component";
import { LightIcon } from "../Icon/darkModeIcon.component";

export const ThemeBtn = () => {
  const dispatch = useDispatch()
  let theme = useSelector(store => store.theme.value)

  
    return (
    <>
    <button className="absolute top-0 right-0" onClick={() => dispatch(updateTheme())}>
      {theme === 'day' ? <DarkIcon id="darkIcon-id"/> : <LightIcon id="lightIcon-id"/> }
    </button>
  
    </>
)
}