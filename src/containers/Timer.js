import {connect} from '../store/slomux'
import {TimerComponent} from '../components/Timer'

const mapStateToProps = state => ({
    currentInterval: state.currentInterval || 1
});

const mapDispatchToProp = () => {
};

const Timer = connect(mapStateToProps, mapDispatchToProp)(TimerComponent);

export default Timer