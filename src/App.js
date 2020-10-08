import React, { Component } from "react";
import "./style/style.css";
import names from "./names";

export default class AutoCompleteText extends React.Component {
  constructor(props){
    super(props)
    this.items = names()
    this.state = {
      suggestions: [],
    }

    this.onTextChanged = this.onTextChanged.bind(this)
    this.renderSuggestions = this.renderSuggestions.bind(this)
  }

  onTextChanged = (e) => {
      const value = e.target.value
      
      let suggestions = []
      if(value.length > 0) { 
        const regex = new RegExp(`^${value}`,'i')
        suggestions = this.items.sort().filter(v=>regex.test(v))
         localStorage.setItem('v',JSON.stringify(suggestions))
      } 

      this.setState(()=>({
        suggestions : JSON.parse(localStorage.getItem('v'))

      }))
  
     
  }


  renderSuggestions() {
    const {suggestions} =   this.state   ;
    if (suggestions.length === 0) {
      return null
    }
    return (
        <>       
         {
          JSON.parse(localStorage.getItem('v')).map((item)=>  
          <li className='item' key={item+1} >
            <i className="userIcon far fa-user"></i>
            {item}
          </li>)  
         }                                     
        </>
    )
  }

  render(){
    return (
      <div className='interface'>       
          <h1 className='title'>Search a name
        <span className='counter'>
          {this.state.suggestions.length > 0 ? this.state.suggestions.length : null}
        </span>
        </h1>       
        <input 
        type='text'
        className='searchField'
        maxLength='13'
        onChange={this.onTextChanged}
        />
      <i className="searchIcon fas fa-search"></i>
         
          {
          this.renderSuggestions()       
          }     
      </div>
    )
  }
}



// export default class HideableText extends React.Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         isHidden: false,
//       }
//  this.toggleIsHidden = this.toggleIsHidden.bind(this)

//     }

//     toggleIsHidden(){
//       this.setState((currentState)=>({
//         isHidden : !currentState.isHidden
//       }))
//     }

//     render(){
//       return(
//         <div>
//             <button onClick={()=>this.toggleIsHidden()}>Toggle</button>
//             {!this.state.isHidden && this.props.text}
//         </div>
//       )
//     }
// }



// export default class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//         list : 
//         [
//         "Sarah",
//         "Pedro",
//         "John",
//         "Maria",
//         "Zelda",
//         "Albert",
//         "Alisson",
//         ]
//     };

//     this.filterItem = this.filterItem.bind(this);

//   };

  


   
//     filterItem(event){
//       let res  = event.target.value;
//       this.state.list.filter(res)
//     };

//   render() {
//     return (
//       <div className="interface">
//         <input
//         type='text'
//         className='searchField'
//         placeholder='search a name'
//         maxLength='20'
//         onChange={this.filterItem}
//         />

//         {this.state.list.filter(res).map((item) => (
//           <h1 className='item'>{item} </h1>         
//         ))}
//       </div>
//     );
//   };
// };
