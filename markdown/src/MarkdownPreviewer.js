import React from 'react';
import './App.css';

class MarkdownPreviewer extends React.Component {
    render(){
        return (
            <div className="previewer">
                <h4>MarkdownPreviewer</h4>
                <div dangerouslySetInnerHTML={this.props.markup} />

            </div>
        )
    }
}

export default MarkdownPreviewer;