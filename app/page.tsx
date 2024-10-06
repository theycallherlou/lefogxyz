import Image from 'next/image';
import AudioPlayer from '@/components/AudioPlayer';
import { barlowLight } from '@/style/fonts';

export default function Home() {
  return (
    <div
      className={`${barlowLight.className} min-h-screen w-full max-w-screen-lg mx-auto p-2`}
    >
      <section className="h-full w-full mx-auto flex flex-col justify-between items-center p-2">
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
        <h1 className="text-center text-3xl">ELECTRIFIED METER</h1>
        <div className="w-full max-w-screen-lg mx-auto min-h-40 mb-6">
          <AudioPlayer />
        </div>
      </section>
    </div>
  );
}
