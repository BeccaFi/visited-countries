import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog } = useFetch('http://localhost:3002/blogs/' + id);

    return (
        <div className="blog-details">
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            ) }
        </div>
    );
}

export default BlogDetails;