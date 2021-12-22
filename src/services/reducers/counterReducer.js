import { CounterOne, CountDown, Reset } from "../constants";
const init = {
  count: 0,
};

function countPlusOne(state = init, action) {
  switch (action.type) {
    case CounterOne:
      init["count"] += action.data;
      return {
        ...state,
      };

    case CountDown:
      init["count"] -= action.data;
      return {
        ...state,
      };

    case Reset:
      init["count"] = 0;
      return {
        ...state,
      };

    default:
      return {
        state,
      };
  }
}

export default countPlusOne;
