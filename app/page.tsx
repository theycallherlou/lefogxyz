import AudioPlayer from '@/components/AudioPlayer';
import { barlowLight } from '@/style/fonts';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <div
      className={`${barlowLight.className} border-red-300 border-2 h-full w-full max-w-screen-lg mx-auto flex flex-col justify-start items-center p-2`}
    >
      <section className="border-red-400 border-2 w-full flex justify-center items-center flex-0">
        <Logo />
      </section>
      <section className="border-red-400 border-2 w-full max-w-screen-sm mx-auto min-h-72 flex-1">
        <AudioPlayer />
      </section>
    </div>
  );
}
