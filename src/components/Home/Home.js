import React, { Component } from 'react';


class Home extends Component{

    render(){
        const issues=this.props.issues.map((issue) =>{

            return(
                <tr key={issue.number}>
                    <td>{issue.number}</td>
                    <td>{issue.state}</td>
                    <td>{issue.title}</td>
                    <td>{issue.body}</td>                    
                </tr>
            );

        });

        return(
            <div className="home col-md-10 mx-auto" style={{marginTop:'40px'}}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>State</td>
                            <td>Title</td>
                            <td>Body</td>
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

export default Home;