import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import { EuiToolTip, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHeader, EuiText, EuiTextColor } from "@elastic/eui";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { signOut } from "firebase/auth";
import { changeTheme } from "../app/slices/AuthSlice";
import { getCreateMeetingBreadCrumbs, getMeetingsBreadCrumbs, getMyMeetingsBreadCrumbs, getOneonOneMeetingBreadCrumbs, getVideoConferenceBreadCrumbs, getWhiteBoardBreadCrumbs } from "../utils/breadCrumbs";

function Header() {
    
    const dispatch = useDispatch();
    const logout = () => {
        signOut(firebaseAuth)
    }

    

    const navigate = useNavigate();
    const location = useLocation();
    let username = useAppSelector((state)=>state.auth.userInfo?.name)
    const user = useAppSelector((state)=>state.auth.userInfo)
    if(!username) username = user?.name;
    console.log(user)
    console.log(username)
    const isDarkTheme = useAppSelector((state)=>state.auth.isDarkTheme);
    const [breadcrumbs, setBreadcrumbs] = useState([{text:"Dashboard"}]);
    const [isResponsive, setIsResponsive] = useState(false);

    useEffect(()=>{
        const {pathname} = location;
        if(pathname === '/create'){
            setBreadcrumbs(getCreateMeetingBreadCrumbs(navigate))
        }
        else if(pathname === '/create1on1'){
            setBreadcrumbs(getOneonOneMeetingBreadCrumbs(navigate))
        }
        else if(pathname === '/videoconference'){
            setBreadcrumbs(getVideoConferenceBreadCrumbs(navigate))
        }
        else if(pathname === '/mymeetings'){
            setBreadcrumbs(getMyMeetingsBreadCrumbs(navigate))
        }
        else if(pathname === '/meetings'){
            setBreadcrumbs(getMeetingsBreadCrumbs(navigate))
        }
        else if(pathname === '/whiteboard'){
            setBreadcrumbs(getWhiteBoardBreadCrumbs(navigate))
        }
    },[location,navigate])

    const invertTheme = () => {
        const theme = localStorage.getItem('zoom-theme');
        localStorage.setItem('zoom-theme',theme === 'light'?'dark':'light');
        dispatch(changeTheme({isDarkTheme:!isDarkTheme}))
    }

    const whiteBoard = () =>{
        navigate('/whiteboard')
    }

    const section = [{
        items:[
            <Link to='/'>
                <EuiText>
                    <h2 style={{padding:"0 1vw"}}>
                        <EuiTextColor color="#0b5cff">E Learning</EuiTextColor>
                    </h2>
                </EuiText>
            </Link>,
        ]
    },
    {
        items:[
            <>
                {
                    username? (
                        <EuiText>
                            <h3>
                                <EuiTextColor color="white">Hello, </EuiTextColor>
                                <EuiTextColor color="#0b5cff">{username}</EuiTextColor>
                            </h3>
                        </EuiText>
                    ):null
                }
            </>
        ]
    },
    {
        items:[
            <EuiFlexGroup
            justifyContent="center"
            alignItems="center"
            direction="row"
            style={{gap:"2vw"}}
            >
                <EuiFlexItem grow={false} style={{flexBasis:"fit-content"}}>
                    { isDarkTheme?(
                    <EuiButtonIcon
                     onClick={invertTheme} 
                     iconType="sun" 
                     display="fill" 
                     size ='s' 
                     color="warning"
                     aria-label="logout-button">
                        
                    </EuiButtonIcon>)
    :
                    (<EuiButtonIcon 
                    onClick={invertTheme} 
                    iconType="moon" 
                    display="fill" 
                    size ='s' 
                    color="text"
                    aria-label="logout-button">
                        
                    </EuiButtonIcon>)
    }
                </EuiFlexItem>

                <EuiFlexItem grow={false} style={{flexBasis:"fit-content"}}>
                    <EuiToolTip content="White Board" position="bottom">
                    <EuiButtonIcon onClick={whiteBoard} iconType="desktop" display="fill" size ='s' aria-label="WhiteBoard">
                    </EuiButtonIcon>
                    </EuiToolTip>
                </EuiFlexItem>

                <EuiFlexItem grow={false} style={{flexBasis:"fit-content"}}>
                    <EuiToolTip content="Logout" position="bottom">
                    <EuiButtonIcon onClick={logout} iconType="lock" display="fill" size ='s' aria-label="logout-button">
                    </EuiButtonIcon>
                    </EuiToolTip>
                </EuiFlexItem>

            </EuiFlexGroup>
        ]
    }
    
];
    const responsiveSection = [{
        items:[
            <Link to='/'>
                <EuiText>
                    <h2 style={{padding:"0 1vw"}}>
                        <EuiTextColor color="#0b5cff">E Learning</EuiTextColor>
                    </h2>
                </EuiText>
            </Link>,
        ]
    }
];

    useEffect(()=>{
        if(window.innerWidth<480) setIsResponsive(true);
    },[])

  return <>
  <EuiHeader style={{minHeight:"8vh"}} theme="dark" sections={isResponsive?responsiveSection:section}/>
  <EuiHeader style={{minHeight:"8vh"}} sections={[{breadcrumbs}]}/>
  </>
}
export default Header;