import { useState, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import CountryList from './CountryList';
import Sort from '../Hooks/Sort';


const Home = () => {
    const { data } = useFetch('http://localhost:3002/countries');
    const { sortedData } = Sort('http://localhost:3002/countries?_sort=rating&_order=desc');
    
  
 
    return (
        
        <div className="home">
   
        {data && <CountryList countries={ data } title="All Countries" />}
            {/*{sortedData && <CountryList countries={ sortedData } />}*/}
        {/*{data && <CountryList countries={ data.filter(country => country.continent === 'Europe') }/>}*/}
        </div>
    )
}


export default Home;


// <button onClick={allClick}>All countries</button>
// <button onClick={sortClick}>Sorted by rating</button>

// <div className='sort-filter'>
//     <button>Sort by rating</button>
//     <button>Filter by continent</button>
//         <label>Sort by </label>
//         <select>
//             <option></option>
//             <option>Name</option>
//             <option>Capital</option>
//             <option>Rating</option>
//         </select>
//         <label>Filter </label>
//         <select>
//             <option></option>
//             <optgroup label='Continent'>
//                 <option>Africa</option>
//                 <option>Asia</option>
//                 <option>Europe</option>
//                 <option>Oceania</option>
//                 <option>North America</option>
//                 <option>South America</option>
//             </optgroup>
//         </select>
//     </div>


// const allClick = () => {
//     return (
//        <div>
//      {data && <CountryList countries={ data } title="All Countries" />}
//      </div>
//     )
// }

// const sortClick = () => {
//    return (
//        <div>
//        {sortedData && <CountryList countries={ sortedData } />}
//        </div>
//    )
// }

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