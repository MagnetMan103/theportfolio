import Header from '../components/header';
import CardHolder from '../components/cardHolder';
import About from "~/components/about";
import Footer from "~/components/footer";
import Resume from "~/components/resume";
import Special from "~/components/special";

export default function HomePage() {
    return (
        <div className="bg-blue-200 min-h-screen">
            <Header />
            <About />
            <Resume />
            <Special />
            <CardHolder />
            <Footer />
        </div>
    );
}