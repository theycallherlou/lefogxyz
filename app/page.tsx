import Image from 'next/image';

export default function Home() {
  return (
    <div className="border-2 border-blue-950 min-h-screen max-w-screen-xl mx-auto w-full my-4 p-2">
      <main className="w-full flex flex-col justify-center items-center p-2">
        <section className="container w-full mx-auto">
          <h1 className="w-full text-center p-2" title="main title on page">
            soy de le fog
          </h1>
          <div className="container w-full mx-auto flex justify-center items-center p-2">
            <Image
              src="/logo/logo_steel.png"
              alt="logo"
              width={500}
              height={500}
              className=""
              title=""
            />
          </div>
        </section>
      </main>
    </div>
  );
}
