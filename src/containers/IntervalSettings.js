import {connect} from "../store/slomux";
import {changeInterval} from '../store/actions'
import {IntervalSettingsComponent} from "../components/IntervalSettings";

const mapStateToProps = state => ({
    currentInterval: state.currentInterval
});

const mapDispatchToProps = dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
});

const IntervalSettings = connect(mapStateToProps, mapDispatchToProps)(IntervalSettingsComponent);

export default IntervalSettings