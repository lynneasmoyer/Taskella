import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function WaterTracker() {
    const [drinkWater, setWater] = useState({
        drop: ""
      })
      
      const [waterDrops, setWaterDrops] = [[1,2,3,4,5,6,7,8], useState([])];
    
      const handleChange = (e) => {
        setWater({
          ...drinkWater,
          [e.target.name]:e.target.value
        })
      }


        let drop = {
          drinkWater: drinkWater.drop,
          isComplete : false
        }

    
      
    
      const handleCheck = (e,idx) => {
        e.preventDefault();
        let d = {...waterDrops[idx]}
        d.isComplete = !d.isComplete;

      }

return (
    <div className="WaterTracker">
        {
        waterDrops.map((drinkWater,i) => {
          return(
            <FontAwesomeIcon
                icon={faTint} 
                size="lg"
                key={i}
                idx={i}
                checked={drop.isComplete}
                drinkWater={drinkWater}
                onClick={(e) => handleCheck(e,{i})}
                color= {drop.isComplete ?  "blue" : "lightblue"  }
                drop = {drop}
            />
          )
        })
      }
</div>

)
    }

export default WaterTracker;

    // const [state, setState] = useState({ checked: {} });
    

    // const handleClick = id => 
    //     setState(state => {
    //         const checked = { ...state.checked, [id]: !state.checked[id] };
    //         return {
    //           ...state,
    //           checked
    //         };
    //       });
    // // const [drop] = useState({
    // //     isComplete : false
    // // })
 
    // const idList = [1,2,3,4,5,6,7,8]

    // const [drops, setDrops] = useState([]);

    // const changeColor = (e) => {
    //     const id = e.target.id;
    //     this.props.dropComplete(id)
    //     const completedDrop = !this.state.color[id]
    //     const newColor = { ...this.state.color, [id]: completedDrop }

    //     this.setState({
    //         dropColor: newColor
    //     })

    // }

// class WaterTracker extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             drop1: true,
//             drop2: true,
//             drop3: true,
//             drop4: true,
//             drop5: true,
//             drop6: true,
//             drop7: true,
//             drop8: true
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(idx){
//         this.setState({
//             drop : !this.state.drop[idx],
//         })
//     }

// render(){
//     return (
//         <div className="WaterTracker">

//         <FontAwesomeIcon 
//             icon={faTint} 
//             size="lg"
//             // idx = {idList[0]}
//             // key={id}
//             // isComplete = {drop.isComplete}
//             onClick= {this.handleClick}
//             id = {this.state.drop ?  "drop" : "drop-complete"  }
//         />
//         <FontAwesomeIcon 
//             icon={faTint} 
//             size="lg"
//             idx = {idList[0]}
//             // key={id}
//             // isComplete = {drop.isComplete}
//             onClick= {this.handleClick( {idx} )}
//             id = {this.state.drop ?  "drop" : "drop-complete"  }
//         />

//   </div>
//     )
// }

// }



// export default WaterTracker;

