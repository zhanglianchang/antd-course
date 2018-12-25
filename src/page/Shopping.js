import React from 'react';
import HelloWorld from './HelloWorld';

class Shopping extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               value: null
          }
     }

     componentDidMount() {
          console.log('componentDidMount - 在组件挂载后自动调用');
     }

     componentWillMount() {
          console.log('componentWillMount - 会在组件卸载前自动调用');
     }

     componentDidUpdate() {
          console.log('componentDidUpdate - 在 UI 每次更新后调用 即组件挂载成功以后，每次调用 render 方法，都会触发这个方法');
     }

     render() {
          return (
          <div>
               <HelloWorld name="张联昌行" img="https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg"></HelloWorld>    

               <button onClick={() => {this.setState({value: 'X'})}}>State演示</button> 
               {this.state.value}     
          </div>
          )
     }
}

export default Shopping;
