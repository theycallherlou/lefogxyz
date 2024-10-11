'use client';
import AudioPlayer from '@/components/AudioPlayer';
import { barlowLight } from '@/style/fonts';
import Logo from '@/components/Logo';
import { AudioProvider } from '@/contexts/AudioContext';

export default function Home() {
  return (
    <div
      className={`${barlowLight.className} h-full w-full max-w-screen-lg mx-auto flex flex-col justify-start items-center p-2`}
    >
      <section className="w-full flex justify-center items-center flex-0">
        <Logo />
      </section>
      <section className="w-full max-w-screen-sm mx-auto min-h-72 flex-1">
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </section>
    </div>
  );
}
