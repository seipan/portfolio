import Link from 'next/link';  // Linkをインポートします。
import '../style/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <header className="absolute top-0 left-0 right-0 p-5 flex justify-between">
                <div>Shotaro Yamasaki</div>
                <nav>
                    <Link href="/" legacyBehavior>
                        <a className="mx-2">Home</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="mx-2">About</a>
                    </Link>
                    <a href="https://sizu.me/yadon3141" className="mx-2" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                </nav>
            </header>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
