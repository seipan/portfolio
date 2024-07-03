import Link from 'next/link';

export default function Home() {
    return (
      <main className="text-center">
        <img src="https://pbs.twimg.com/profile_images/1482259385959464960/1pQMXwj7_400x400.jpg" className="mb-16 rounded-full w-32 h-32 mx-auto" alt="Profile"></img>
        <h1 className="text-5xl font-bold mb-4">Shotaro Yamasaki</h1>
        <p className="text-2xl">B3 / Love Go</p>
        <div className="mt-8">
          <Link href="/about" legacyBehavior>
            <a className="mx-2 underline">About</a>
          </Link>
          <a href="https://sizu.me/yadon3141" className="mx-2" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </div>
      </main>
    );
}
