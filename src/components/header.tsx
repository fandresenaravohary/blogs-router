import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/home"><a>Home</a></Link></li>
                    <li><Link href="/blog/1"><a>Blog 1</a></Link></li>
                    <li><Link href="/blog/2"><a>Blog 2</a></Link></li>
                    <li><Link href="/blog/3"><a>Blog 3</a></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;