import { useEffect, useState } from 'react';

const UseBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://sabuj-mojumdar.github.io/fakeapidata/blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    return blogs;
};

export default UseBlogs;