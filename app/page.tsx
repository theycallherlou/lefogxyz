'use client';
import AudioPlayer from '@/components/AudioPlayer';
import { barlowLight } from '@/style/fonts';
import Logo from '@/components/Logo';
import { AudioProvider } from '@/contexts/AudioContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
export default function Home() {
  return (
    <ThemeProvider>
      <div
        className={`${barlowLight.className} h-full w-full max-w-screen-lg mx-auto flex flex-col justify-start items-center p-2`}
      >
        <section className="w-full flex justify-center items-center flex-0">
          <Logo />
        </section>
        <section className="relative w-full max-w-screen-sm mx-auto flex-1 flex flex-col items-center justify-end">
          <AudioProvider>
            <AudioPlayer />
          </AudioProvider>
        </section>
      </div>
    </ThemeProvider>
  );
}
