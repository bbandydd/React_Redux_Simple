import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import clickAction from '../actions/clickAction';

export class CountButton extends React.Component{
    constructor() {
        super();
    }

    handleClick(count, delay){
        this.props.actions.clickAction(count, delay);
    }

    render(){
            return (
                <div>
                    <h1>{this.props.clickReducer.clickCount}</h1>
                    <button onClick={this.handleClick.bind(this, 1, 0)}>Add by 1</button>
                    <button onClick={this.handleClick.bind(this, 10, 0)}>Add by 10</button>
                    <button onClick={this.handleClick.bind(this, 5, 2)}>Delay 2 second and add by 5</button>
                </div>
        )
    }
}
function mapStateToProps(state) {
    debugger
    return {clickReducer: state.clickReducer};
}

function mapActionToProps(dispatch) {
    return {actions: bindActionCreators(clickAction, dispatch)};
}

export default connect(mapStateToProps, mapActionToProps)(CountButton);
