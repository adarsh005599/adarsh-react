import { useState, useEffect } from "react";
function DataFatcher() 
{
    const [data, setData] = useState([]);
    const [loading, setLoading ]  = useState(true);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ):(
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
    
    













}