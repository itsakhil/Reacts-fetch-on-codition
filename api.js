import React from 'react';
 class Api extends React.Component
{
    constructor()
    {
        super()
        this.state={
            
        abc:[]
        }

    };
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
      
        .then(re => re.json()) 
       
        .then(res=> this.setState({abc:res}))
    };

            
        
        render()
        {
            return(
                <div>
                <h1> hiii </h1>
                          {this.state.abc.filter(y=>y.id>5).map(x=>(<h1 key={x.id}>{x.name}</h1>)) }
               </div>
                )
        }
    }
    export default Api