import React from 'react';
import './App.css';

class MarkdownEditor extends React.Component {
    render(){
        return (
            <div className="editor">
                <h4>MarkdownEditor</h4>
                <textarea type="text" onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}

export default MarkdownEditor;