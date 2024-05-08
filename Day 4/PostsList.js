// define PostList functional component to fetch the data from the JSONPlaceholder API and display the list of posts. The API endpoint is https://jsonplaceholder.typicode.com/posts. The component should have the following features:
import { useEffect, useState } from "react";
// The component should have a state variable posts to store the list of posts fetched from the API.
// we will javascript fetch API to fetch the data from the API endpoint.
 
function PostsList() {
    let [posts, setPosts] = useState([]);
    // handle loading message
    // handle error message
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");
 
 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts",
        )
            .then((response) =>
                {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Failed to fetch data");
                }
        )
        .then((data) => {
            console.log(data);
            setPosts(data)
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            setError("Failed to fetch data");
        })
    }, []);
 
    // if (loading) {
    //     return<h1>Loading...</h1>
    // }
 
    // if (error) {
    //     return <h1>{error}</h1>
    // }
 
 
    return (
        <div>
            <h1>Posts</h1>
 
            {/* if loading show loading message else show postlist */}
 
                {loading ? <h1>Loading...</h1> :  <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>}
             
        </div>
    );
}
 
export default PostsList;