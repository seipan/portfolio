import Link from 'next/link';

export default function Home() {
    return (
      <main className="text-center">
        <img src="https://avatars.githubusercontent.com/u/88176012?v=4" className="mb-16 rounded-full w-32 h-32 mx-auto" alt="Profile"></img>
        <h1 className="text-5xl font-bold mb-4">Shotaro Yamasaki</h1>
        <p className="text-2xl">B3 / Love Go</p>
        <div className="mt-8">
          <Link href="/about" legacyBehavior>
            <a className="mx-2 underline">About</a>
          </Link>
          <Link href="/works" legacyBehavior>
            <a className="mx-2 underline">Works</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="mx-2 underline">Blog</a>
          </Link>
        </div>
      </main>
    );
}
