// 'use client';
import Image from 'next/image';
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  return (
    <div className="min-h-screen h-screen max-w-screen-xl mx-auto w-full my-4 p-2">
      <section className="h-full border-2 border-purple-500 w-full mx-auto flex flex-col justify-between items-center p-2">
        <div className="w-full mx-auto flex justify-center items-center p-2">
          <Image
            src="/logo/logo_steel.png"
            alt="logo"
            width={500}
            height={500}
            className="logo"
            title="logo for le fog"
            priority
          />
        </div>
        <h1 className="text-center text-3xl">electrified meter</h1>
        <div className="w-full max-w-screen-lg mx-auto min-h-40">
          <AudioPlayer />
        </div>
      </section>
    </div>
  );
}
