import React from 'react';
import { useAudioContext } from '@/contexts/AudioContext';
import { karla } from '@/style/fonts';

export default function AudioNowPlaying() {
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};

  return (
    <section className="w-full text-center min-h-20">
      {playback && (
        <article className="flex flex-col items-center justify-center">
          <div className={`${karla.variable} text-xl font-semibold`}>
            {song?.title}
          </div>
          <div className="text-base subpixel-antialiased">
            {elapsed} / {duration}
          </div>
        </article>
      )}
    </section>
  );
}
