import  { useContext ,createContext} from 'react';

export const ThemeContext = createContext({
    themeMode :"light",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export default function  useTheme() {
    return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider;

