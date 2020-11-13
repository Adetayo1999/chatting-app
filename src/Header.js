import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {Button , Avatar , IconButton} from "@material-ui/core";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import LiveTvSharpIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreIconIcon from "@material-ui/icons/ExpandMore";
import "./Header.css"
function Header() {
    return (
        <div className ="header">
            <div className ="header-left">
              <form>
                  <div className ="input-group">
                   <input type ="text" placeholder="search our site..." />
                   <SearchIcon fontSize ="large"/>
                  </div>
               <Button type ="submit" className ="button">Search</Button>
                 
              </form>
            </div>
            <div className ="header-center">

                <div className ="header-center-icon active" >
               <PeopleIcon  fontSize ="large"/>
                </div>
                <div className ="header-center-icon" >
                <LocalHospitalIcon fontSize ="large" />
                </div>
                <div className ="header-center-icon" >
                <LiveTvSharpIcon fontSize ="large"/>
                </div>
                <div className ="header-center-icon" >
                <VideoLibraryIcon fontSize ="large"/>
                </div>
            
           
            
           
            </div>
            <div className ="header-right">
             <IconButton>
                <ChatIcon fontSize ="large" className ="rss"/>
                 </IconButton> 
                 <div className ="profile"> 
                 <IconButton>
                     <Avatar src ="tt.jpg" fontSize ="large"/>
                     </IconButton> 
                     <h4>Tomiwa</h4>
                     </div> 
                    <IconButton>
                    <ExpandMoreIconIcon fontSize ="large" className ="hook"/> 
                        </IconButton> 
                        <Button className ="button">Sign In</Button>          
            </div>
        </div>
    )
}
export default Header
