import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogList from '@/components/blogList';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <BlogList />
            <Footer />
        </div>
    );
};

export default Home;