// Vescan   18.04.2019
import React from 'react'

export default class Button extends React.Component {
    render() {
        return(
            <button
                    className = {this.props.className}
                    name = {this.props.name}
                    onClick = {this.props.onClick}
            >
                {this.props.text}
            </button>
        )
    }
}