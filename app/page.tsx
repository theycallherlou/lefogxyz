import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto w-full my-4 p-2">
      <section className="container w-full mx-auto">
        <div className="w-full mx-auto flex justify-center items-center p-2">
          <Image
            src="/logo/logo_steel.png"
            alt="logo"
            width={500}
            height={500}
            className="logo"
            title="logo for le fog"
          />
        </div>
        <h1 className="text-center text-3xl">electrified meter</h1>
      </section>
    </div>
  );
}
