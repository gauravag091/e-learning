import { EuiGlobalToastList, EuiProvider, EuiThemeColorMode, EuiThemeProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_light.css"; 
import "@elastic/eui/dist/eui_theme_dark.css";
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { ThemeProvider } from '@emotion/react';
import CreateMeeting from './pages/CreateMeeting';
import OneOnOneMeeting from './pages/OneOnOneMeeting';
import { setToasts } from './app/slices/MeetingSlice';
import VideoConference from './pages/VideoConference';
import MyMeetings from './pages/MyMeetings';
import Meeting from './pages/Meeting';
import JoinMeeting from './pages/JoinMeeting';


function App() {

  const dispatch = useAppDispatch();
  const toasts = useAppSelector((state)=>state.meetings.toasts);
  const isDarkTheme = useAppSelector((state) => state.auth.isDarkTheme);
  const [theme,setTheme] = useState<EuiThemeColorMode>("light");

  const [isInitialTheme,setIsInitialTheme] = useState(true);

  useEffect(()=>{
    const theme = localStorage.getItem('zoom-theme');
    if(theme){
      setTheme(theme as EuiThemeColorMode);
    }
    else{
      localStorage.setItem('zoom-theme','light');
    }
  },[])

  useEffect(()=>{
    if(isInitialTheme){
      setIsInitialTheme(false);
    }
    else
    {
      window.location.reload();
    }
  },[isDarkTheme])


  const overrides = {
    colors:{
      LIGHT:{primary:'#0b5cff'},
      DARK:{primary:'#0b5cff'}
    }
  }

  const removeToast = (removeToast:{id:string})=>{
    dispatch(
      setToasts(
        toasts.filter((toast:{id:string})=>toast.id !== removeToast.id)
      )
    );
  }

  return(
    <ThemeProvider theme={{}}>
      <EuiProvider colorMode={theme}>
        <EuiThemeProvider modify={overrides}>
          <BrowserRouter>
            <Routes>
              {/* Routes go here */}
              <Route path='/login' element={<Login />} />
              <Route path='/create' element={<CreateMeeting />} />
              <Route path='/create1on1' element={<OneOnOneMeeting />} />
              <Route path='/videoconference' element={<VideoConference />} />
              <Route path='/mymeetings' element={<MyMeetings />} />
              <Route path='/meetings' element={<Meeting />} />
              <Route path='/join/:id' element={<JoinMeeting />} />
              <Route path='/' element={<Dashboard />} />
              <Route path='*' element={<Dashboard />} />
            </Routes>

            <EuiGlobalToastList
              toasts={toasts}
              dismissToast={removeToast}
              toastLifeTimeMs={5000}
              />
            
          </BrowserRouter>
        </EuiThemeProvider>
      </EuiProvider>
    </ThemeProvider>
  )
}

export default App 