import React from 'react';
import './App.css';
import MarkdownPreviewer from './MarkdownPreviewer'
import MarkdownEditor from './MarkdownEditor'
import marked from 'marked';

let defaultMarkdown = `
Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~.

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

\`\`\`
Hey, look, a code block!
\`\`\`

 *[Helder S Ribeiro](https://freecodecamp.com/hsribei)*
`;



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {text: defaultMarkdown}
    this.handleChange = this.handleChange.bind(this);
  
  }
  handleChange(e){
    this.setState({text:e.target.value})
    
  }
  handleMarkup() {
    return {__html: marked(this.state.text)};
  }
  render(){
      return (
        <div className="App">
        <header>
          <h1>Markdown Preview App</h1>
          <a
            className="App-link"
            href="paigel.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            paigel.github.io
          </a>
        </header>
        <div className="Container">
          <MarkdownEditor onChange={this.handleChange} value={this.state.text} />
          <MarkdownPreviewer markup={this.handleMarkup()} />
          </div>
      </div>
      )
  }
}



export default App;
