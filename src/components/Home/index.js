import React, { Component } from 'react'
import Home from './Home'
import api from '../../service/api';
import { DiamonLoading } from 'react-loadingg';
class HomeHOC extends Component{

    state={
            issues:[],
            isLoaded:false
        }

    componentDidMount(){        
        api.get('repos/veerLH/-nuxt-gh-pages/issues',{
            params:{
                'state':'all'
            }
        })
          .then(result =>{
            const issues=result.data.filter(issue=> !issue.pull_request)
            this.setState({issues:issues,isLoaded:true});
          })
    }

    render(){
        if (!this.state.isLoaded) {
            return(  <div>
              <DiamonLoading />
            </div>);          
        }
        return(
            <Home {...this.props} issues={this.state.issues}/>
        )
    }
}

export default HomeHOC;