import React from 'react'

export default class Input extends React.Component {
    render() {
        return(
            <label
                className = {this.props.className}
                name = {this.props.name}
            >
                {this.props.text}
            </label>
        )
    }
}