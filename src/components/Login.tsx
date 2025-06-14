import React, {useReducer} from 'react'

const reducerFunction = (state,action) =>{
  if(action === 'plus'){ 
    console.log(state);
    return {...state,value:state.value+10}
  }
  // if(action === 'minus'){
  //   return state-1;
  // }
  // if(action === "green"){
  //   return "green"
  // }
  // if(action === "red"){
  //   return "red"
  // }

  
}

const Login = () => {
  const initialValue = {value:110, color:"white"}
  const [currentState, dispatchValue] = useReducer(reducerFunction,initialValue);
  const handlePlus = () =>{
    dispatchValue('plus');
  }
  const handleMinus = () =>{
        // dispatchValue('minus');
  }
  const handleColorGreen = () =>{
    // dispatchValue('green')
  }
  const handleColorRed = () =>{
    // dispatchValue('red')
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] gap-3">
      <button className='bg-blue-400 w-[70px] h-[25px]' onClick={handlePlus}>PLUS</button>
      <button className='bg-blue-400 w-[70px] h-[25px]' onClick={handleMinus}>MINUS</button>
      <button className='bg-blue-400 w-[70px] h-[25px]' onClick={handleColorGreen}>GREEN</button>
      <button className='bg-blue-400 w-[70px] h-[25px]' onClick={handleColorRed}>RED</button>

      <h1 className='text-3xl'>{currentState.value}</h1>
    </div>
  )
}

export default Login