import Link from 'next/link';

interface Blog {
    id: number;
    title: string;
}

const BlogList: React.FC = () => {
    const blogs: Blog[] = [
        { id: 1, title: 'Premier Post' },
        { id: 2, title: 'Deuxième Post' },
        { id: 3, title: 'Troisième Post' }
    ];

    return (
        <div>
            <h2>Liste des Posts</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>
                            <a>{blog.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
