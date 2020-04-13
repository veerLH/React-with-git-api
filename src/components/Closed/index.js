import React, { Component } from 'react'
import Closed from './Closed'
import api from '../../service/api';
import { EatLoading } from 'react-loadingg';
class ClosedHOC extends Component{

    state={
            issues:[],
            isLoaded:false
        }

    
    componentDidMount(){        
        this.locadList();
    }

    locadList(){
        api.get('repos/veerLH/-nuxt-gh-pages/issues',{
            params:{
                'state':'closed'
            }
        })
        .then(result =>{
          const issues=result.data.filter(issue=> !issue.pull_request)
          this.setState({issues:issues,isLoaded:true});
        })
    }
    handelOpened = (number)=>
    {
        console.log(number);
        api.patch(`repos/veerLH/-nuxt-gh-pages/issues/${number}`,{state:'open'})
        .then((result) =>{
            console.log(result);
            this.locadList()
          })
    }
    render(){
        if (!this.state.isLoaded) {
            return(  <div>
               <EatLoading />
            </div>);          
        }
        return(
            <Closed {...this.props} issues={this.state.issues} open={this.handelOpened}/>
        )
    }
}

export default ClosedHOC;