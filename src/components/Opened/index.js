import React, { Component } from 'react'
import Opened from './Opened'
import api from '../../service/api';
import { WindMillLoading } from 'react-loadingg';

class OpenedHOC extends Component{

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
                'state':'open'
            }
        })
        .then(result =>{
          const issues=result.data.filter(issue=> !issue.pull_request)
          this.setState({issues:issues,isLoaded:true});
        })
    }
    handelColsed = (number)=>
    {
        console.log(number);
        api.patch(`repos/veerLH/-nuxt-gh-pages/issues/${number}`,{state:'closed'})
        .then((result) =>{
            console.log(result);
            this.locadList()
          })
    }
    render(){
        if (!this.state.isLoaded) {
            return(  <div>
              <WindMillLoading />
            </div>);          
        }
        return(
            <Opened {...this.props} issues={this.state.issues} close={this.handelColsed}/>
        )
    }
}

export default OpenedHOC;