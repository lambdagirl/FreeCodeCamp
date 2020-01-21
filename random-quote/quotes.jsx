import React from "react";
import axios from 'axios'

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            quote:"",
            author: "",
        }
        this.getQuote = this.getQuote.bind(this)

    }
    componentDidMount() {
        this.getQuote()
     }
  
     getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        axios.get(url)
           .then(res => {
              let data = res.data.quotes
              const number = Math.floor(Math.random()*data.length);
              this.setState({
                 quote: data[number].quote,
                 author: data[number].author
              })
           })
     }
    render (){
        return (
            <div id='wrapper'>
            <h1 className='title'>Random Quote App</h1>
                <div id="quote-box" className="quote-box">
                <QuoteBox quote={this.state.quote} author={this.state.author} /> 
                    <div className="buttons">
                        <ShareButton title="Tweet Quote" author ={this.state.author} quote ={this.state.quote} />
                        <Button title='New Quote' onClick ={this.getQuote} />
                    </div>
                </div>
                <footer>by <a href="https://github.com/paigel">Zheng</a></footer>
            </div>
            )
    }
}

const Button = ({onClick, title})=>{
    return (
        <button className="button new-quoate" id="new-quote" onClick={onClick}>{title}</button>
        )
}

const QuoteBox =({quote,author}) =>{
    return (
        <React.Fragment>
        <div className="quote-text">
            <span id="text">{quote}</span>
        </div>
        <div className="quote-author">
            <span id="author">-{author}</span>
        </div>
        </React.Fragment>    
    )
}

const ShareButton = ({title,quote,author})=>{
    return (
    <button className="button tweet-quoate" id="tweet-quote">
    <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="_blank" title="Post this quote on twitter!" id='tweet-quote'>
    {title}</a></button>)
}
export default Quotes;