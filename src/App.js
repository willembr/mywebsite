import React,{Component} from 'react';
import Playground from './Containers/PlayGround/Playground';
import Layout from './hoc/Layout/Layout';
import Auxial from './hoc/Auxial/Auxial';

class App extends Component{
  render(){
    return(
      <Auxial>
         <Layout >
          <Playground/>
        </Layout>
      </Auxial>
      
    );
  }
}


export default App;
