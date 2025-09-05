import { useState } from "react";
import MainPage from "./MainPage"
import SearchPage from "./SearchPage";
import { Outlet } from "react-router-dom";

const MainContainer =({setSearchVisible ,SearchVisible , inputText , setInputText})=>{
   
    return(
        <>
        { SearchVisible && <SearchPage setSearchVisible={setSearchVisible} inputText={inputText} setInputText={setInputText}/>}
        <Outlet/>
        </>
    )
}
export default MainContainer;