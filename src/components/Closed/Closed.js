import React, { Component } from 'react';


class Closed extends Component{

    render(){
        const issues=this.props.issues.map((issue) =>{

            return(
                <tr key={issue.number}>
                    <td>{issue.number}</td>
                    <td>{issue.state}</td>
                    <td>{issue.title}</td>
                    <td>{issue.body}</td>   
                    <td><button className="btn btn-success" onClick={()=>this.props.open(issue.number)}>Re_Opened</button></td>                 
                </tr>
            );

        });

        return(
        
            <div className="opened col-md-10 mx-auto" style={{marginTop:'40px'}}>
                <h2>CLosed</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>State</td>
                            <td>Title</td>
                            <td>Body</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {issues}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Closed;