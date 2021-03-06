import React, { Component } from 'react'
import ShowHint from './ShowHint'
import {connect} from 'react-redux'
import {setHintState} from '../../../../actions/gameone/setHintState'
import '../index.css'

class Hint extends Component {
    handleClick = () => {
        if(!this.props.usedBreeds.includes(this.props.breed)) {
            this.props.setHintState()
        } else {
          alert("You've already seen this breed before!")
        }
    }

  render() {
    return (
      <>
        <button className="Hint" onClick={this.handleClick}>?</button>
        {
            this.props.showHint 
            ? <ShowHint hint={this.props.breed} />
            : null
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        usedBreeds: state.usedBreeds,
        showHint: state.showHint,
    }
}

export default connect(mapStateToProps, {setHintState})(Hint)
