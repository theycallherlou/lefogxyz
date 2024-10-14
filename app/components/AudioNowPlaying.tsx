import React from 'react';
import { useAudioContext } from '@/contexts/AudioContext';
import { karla } from '@/style/fonts';

export default function AudioNowPlaying() {
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};

  return (
    <section className="w-full text-center min-h-10">
      {playback && (
        <article className="text-white subpixel-antialiased">
          <div
            className={`${karla.variable} text-sm sm:text-base md:text-lg lg:text-xl`}
          >
            {song?.title}
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg">
            {elapsed} / {duration}
          </div>
        </article>
      )}
    </section>
  );
}
