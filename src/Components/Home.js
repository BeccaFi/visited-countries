
import { useState, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
    const { data } = useFetch('http://localhost:3002/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id); {/*Om id't INTE matchar är det false, för id't matchar ju. Och allt som blir false filtreras ut ur listan. Så då tas de bort i browsern. OBS! Måste läggas in i template som en prop: handleDelete={handleDelete} och kopplas som prop till sin template och knappen osv.*/}
    //     setBlogs(newBlogs);
    // }



    return (
        <div className="home">

            {data && <BlogList blogs={data} title="All Blogs!" />}
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" /> */}
            </div>
    )
}


export default Home;




// ----- USE STATE -----
// const Home = () => {
//     const [name, setName] = useState('Mario');
//     const [age, setAge] = useState(25)


//     const handleClick = () => {
//         setName('Luigi');
//         setAge(30);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     );
// }


// ------ HANDLE CLICK -------
// const Home = () => {

//     const handleClick = (e) => {
//         console.log('hello, ninjas');
//     }

//     const handleClickAgain = (name) => {
//         console.log(`hello ${name}`);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click Me</button>
//             <button onClick={() => handleClickAgain('mario')}>Click Me Again</button>
//         </div>
//     );
// }


// ----- OUTPUT LIST OF DATA -----
// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         {title: "My new website", body: "lorem ipsum...", author: "mario", id: 1},
//         {title: "Welcome pary!", body: "lorem ipsum...", author: "ypsho", id: 2},
//         {title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3}
//     ]);

//     return (
//         <div className="home">
//         {blogs.map((blog) => (
//             <div className="blog-preview" key={blog.id}>
//             <h2>{ blog.title }</h2>
//             <p>Written by { blog.author }</p>
//             </div>
//     ))}
//         </div>
//     )
// }