import React from "react";

class MOR extends React.Component{
    
  
    render(){
        
        let m = 600;
        let n = 400;
    document.onkeypress = function(event) {
     
        
      
         if (event.key == "d" || event.key == "D" || event.key == "В" || event.key == "в"){
            m = m+50;
            const element = document.getElementsByClassName('MOR')[0];
                element.style.left= m + "px";  
                
               
                } 
          if (event.key == "a" || event.key == "A" || event.key == "Ф" || event.key == "ф"){
            m = m-50;
             const element = document.getElementsByClassName('MOR')[0];
                element.style.left= m + "px";  
               
               } 
         if (event.key == "w" || event.key == "W" || event.key == "Ц" || event.key == "ц"){
            n = n-50;
          const element = document.getElementsByClassName('MOR')[0];
             element.style.top= n + "px";  
            
         }      
         if (event.key == "s" || event.key == "S" || event.key == "Ы" || event.key == "ы"){
            n = n+50;
            const element = document.getElementsByClassName('MOR')[0];
           
               element.style.top= n + "px";  
               
           }      
         
    
            }
            function UP() {
                n = n-50;
                let element = document.getElementsByClassName('MOR')[0];
                element.style.top= n + "px";  
                
                return;
            }
            function LEFT() {
                m = m-50;
                let element = document.getElementsByClassName('MOR')[0];
                element.style.left= m + "px";  
                
                return;
            }

            function RIGHT() {
                m = m+50;
                let element = document.getElementsByClassName('MOR')[0];
                element.style.left= m + "px";  
                
                return;
            }

            function DOWN() {
                n = n+50;
                let element = document.getElementsByClassName('MOR')[0];
                element.style.top= n + "px";  
               
               return;
            }


return(
    <div>
    <div  className="fieldstyle2 MOR" >
     
    </div>
    <button className="fieldstyle2 BUTUP"  onClick={UP}></button>
    <button className="fieldstyle2 BUTLEFT" onClick={LEFT}></button>
    <button className="fieldstyle2 BUTRIGH" onClick={RIGHT}></button>
    <button className="fieldstyle2 BUTDOWN" onClick={DOWN}></button>
    </div>

);
    
    }

}
export default MOR;
/* mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
  }*/ 