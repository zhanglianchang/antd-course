import Shopping from './Shopping.js';

class HelloWorld extends React.Component {
     render() {
          return (
               <div>
                    <h1>我尼玛 -- {this.props.name}</h1>
                    <img src={this.props.img} />
                    
               </div>
          )
     }
}

export default HelloWorld;