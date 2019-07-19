import React from 'react'
import './Button.css'



class Header extends React.Component{
    render()
    {
        return(
            <div style={{backgroundColor:'#7A2140 ',border:50,width:1366,height:500}}>
                
                <div style={{height:80,marginLeft:110,marginRight:110,backgroundColor:'#420839  ',border:5,width:1070}}>
                <input className="button" type="button" value="Mockups"/>
                <input className="button" type="button"  value="Logos"/>
                <input className="button" type="button"  value="Videos"/>
                <input className="button" type="button"  value="Designs"/>
                <input className="button" type="button"  value="Downloads"/>
                <input className="button" type="button"  value="services"/>
                <input className="button" type="button"  value="About Us"/>
                <input style={{marginLeft:212,borderRadius:17,width:240,border:'none',outline:'none',height:30,padding:5}} type="text" placeholder="Search.."/>
                <p style={{color:'white',fontWeight:"bold",fontSize:38}}>We Make the Future Here</p>
                <img style={{marginTop:30,height:300,outline:'none',display:'block',width:200,marginLeft:0,marginLeft:1000,display:'block'}}src={process.env.PUBLIC_URL +"/tutor.jpg"}
                 alt="Mypic" />
                </div>
                <div style={{width:1366,backgroundColor:'purple',height:200,border:5}}>
             </div>
            </div>
             
        )
        
    }
}
export default Header;