import { serif } from "../fonts";

export default function Msg() {
  const message = `
Dear Aakriti,

I really find myself at a lack of words in this moment... 

Any celebration is incomplete without a special person. Although I may or may not be the one, I still hope this letter fulfills my intention of bringing a smile to your face.

I rarely go through the trouble of creating websites with fun colors and designs as I don't have an artistic side, but for you it was all worth it. 

Thanks for always bringing out my better side. With you, I met the happiest version of myself, that not even I was aware existed. It is a pleasure I can never pay the price of to have you in my life. So on this day where we celebrate the beautiful human being as yourself, please accept my wishes grandly, and if you can, please forgive me for all the trouble I may have caused you, though I never intended to.

I'm sorry this message couldn't be very long. I lack the words to describe the things I wish to say to you... With that said, be forever happy and best of luck for a flourishing future ahead. Happy birthday once again, and go conquer the world! 

~ Sushant
`;
  return (
    <div className="mx-auto w-full max-w-2xl px-4">
      <div className="rounded-2xl border-2 border-rose-200 bg-gradient-to-b from-white to-rose-50 p-6 shadow-2xl sm:p-8 md:p-10">
        <div className="mb-6 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-500" />
          <div className="h-3 w-3 rounded-full bg-violet-400" />
          <div className="h-2 w-2 rounded-full bg-amber-500" />
        </div>

        <div className="prose prose-sm max-w-none">
          <p
            className={`text-center font-serif text-base leading-relaxed whitespace-pre-line text-amber-950 sm:text-lg ${serif.className}`}
          >
            {message}
          </p>
        </div>

        <div className="flex justify-center gap-2 pt-2">
          <div className="h-2 w-2 rounded-full bg-amber-500" />
          <div className="h-3 w-3 rounded-full bg-violet-400" />
          <div className="h-2 w-2 rounded-full bg-amber-500" />
        </div>
      </div>
    </div>
  );
}
