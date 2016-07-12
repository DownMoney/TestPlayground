import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actions from '../actions';

export const Voting = React.createClass({
    mixins: [PureRenderMixin],
    render: function () {
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner}/> :
                <Vote {...this.props} />}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        hasVoted: state.get('hasVoted'),
        winner: state.get('winner'),
        userID: state.get('userID'),
        voted: state.get('voted')
    };
}

export const VotingContainer = connect(
    mapStateToProps,
    actions
)(Voting);