import AudioPlayer from '@/components/AudioPlayer';
import { barlowLight } from '@/style/fonts';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <div
      className={`${barlowLight.className} min-h-screen w-full max-w-screen-lg mx-auto flex flex-col justify-between items-center`}
    >
      <section className="w-full flex justify-center items-center flex-1">
        <Logo />
      </section>
      <section className="w-full max-w-screen-md mx-auto min-h-40 flex-0">
        <AudioPlayer />
      </section>
    </div>
  );
}
