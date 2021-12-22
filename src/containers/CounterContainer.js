import { connect } from "react-redux";
import { PlusOne, downOne, reset } from "../services/actions/CounterAction";
import Counter from "../components/Counter";

const mapStateToProps = (value) => {
  return { count: value.countPlusOne.state.count };
};

const mapDispatchToProps = (dispatch) => ({
  countOne: (data) => dispatch(PlusOne(data)),
  countDown: (data) => dispatch(downOne(data)),
  reset: ()=>dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
