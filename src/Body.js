import React from 'react'
import './Style.css'


class Header extends React.Component{
    constructor (props)
    {
        super(props);
        this.state=({
            backgroundColor:'brown',
           
        })
    }
    handlebackgroundColor=()=>
    {
        this.setState({
            backgroundColor:'blue'
        })
    }
    render()
    {
        return(
            <div  style={{backgroundColor:'#F5B041 ',border:10,width:1360,height:550}}>
                
                    <div  style={{height:40,backgroundColor:'black' ,width:1363}}>
                    
                    <input  className="button1" type="button" value="Mission"/>
                    <input  className="button1" type="button"  value="Services"/>
                    <input  className="button1" type="button"  value="Subjects"/>
                    <input  className="button1" type="button"  value="Institutions"/>
                    <input  className="button1" type="button"  value="Forms"/>
                    <input  className="button1" type="button"  value="About Us"/>
                    <input  className="button1" type="button"  value="Contact "/>
                    <input style={{paddingLeft:20,height:25,marginLeft:400,borderRadius:17,width:220,border:'none',outline:'none',}} type="text" placeholder="Search.."/>
                    </div>
                    <div id="div1"  className="button1" >
                    <img style={{marginTop:0}}src={process.env.PUBLIC_URL +"/symbol.png"}
                    alt="Mypic" />
                        <div style={{width:'100%'}}>
                         <p  style={{fontWeight:'bold',color:'black',marginTop:2,float:'left',fontSize:25,width:270,marginLeft:20}}> The Best platform that connects the students with Right Tutors </p>
                    
                     <img style={{float:'right',height:50,marginTop:0,height:160,outline:'none',width:205,display:'block'}}src={process.env.PUBLIC_URL +"/tutor.jpg"}/>
                                </div>
                 </div>
                    
                        <div  style={{marginLeft:220,height:300}}>
                            <div  className="div3" style={{float:'left', border:5,height:170,width:170,}} >
                               <p  style={{ marginLeft:12,marginTop:50,fontSize:30}}> Montessori</p>
                                </div>
                            <div className="div3" style={{marginLeft:15,float:'left', border:5,height:170,width:170,}}>
                                <p style={{ marginLeft:35,marginTop:50,fontSize:30}}>Metric</p>
                                </div>
                            <div className="div3" style={{marginLeft:15,float:'left', border:5,height:170,width:170,}}>
                                <p style={{ marginLeft:35,marginTop:50,fontSize:30}}>O'Levels</p>
                                </div>
                            <div className="div3" style={{ marginLeft:15,float:'left',border:5,height:170,width:170,}} >
                                <p style={{ marginLeft:35,marginTop:50,fontSize:30}}>A'Levels</p>
                                </div>
                            <div className="div3" style={{ marginLeft:15,float:'left',border:5,height:170,width:170,}}>
                                <p style={{ marginLeft:38,marginTop:50,fontSize:30}}>IGCSE</p>
                                </div>
                                
                        </div>
                        <div style={{marginTop:150,backgroundColor:'black',border:10,width:1350,height:60,padding:5}}>
                            <p style={{color:'white',textAlign:'right',fontWeight:'bold' ,marginTop:15}}>Want to know more about Us?</p>
                             </div>
                   </div>   
            
             
        )
        
    }
}
export default Header;