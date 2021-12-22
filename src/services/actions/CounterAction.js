import { CounterOne , CountDown, Reset} from "../constants";

export const PlusOne = (data) => {
  return {
    type: CounterOne,
    data 
  };
};

export const downOne = (data)=>{
  return{
    type: CountDown,
    data
  }
}
export const reset = ()=>{
  return{
    type: Reset
  }
}