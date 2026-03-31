import { serif } from "../fonts";

export default function Msg() {
  const message = [
    `
Dear Aakriti,
`,
    `
I really find myself at a lack of words in this moment... 

Any celebration is incomplete without a special person. And while it is quite tormenting, knowing I’m not the one who fills that place, I still hope this letter fulfills my intention of bringing a smile to your face.

I rarely go through the trouble of creating websites with fun colors and designs since I don't have an artistic side; but for you, it was worth every second. 

Anyway..

Thanks for always bringing out my better side. With you, I met the happiest version of myself, that not even I was aware existed. It is a pleasure I can never pay the price of to have you in my life. So on this day where we celebrate the beautiful human being as yourself, please accept my wishes grandly, and if you can, please forgive me for all the trouble I may have caused you, though I never intended to.

There's this quote, one of my all-time favorites, from the book "The Kite Runner," and it reads,
`,

    `
"For you, a thousand times over."
`,
    `
When I read that for the first time, no one really came to mind. But now whenever I am thinking of it, I'm reminded of you. Maybe it is mortifying or "cringe", but it's true.

With that said, thank you again for being the best part of my life. I do not intend to start`,
    ` that `,
    `topic again, but please be a part of me till the very end.

I'm sorry this message couldn't be very long. I lack the words to describe the things I wish to say to you... Be forever happy and best of luck for a bright and flourishing future ahead. Best wishes for your exams. Happy birthday once again, and go conquer the world!
`,
    `
~ Sushant

`,
  ];
  return (
    <div className="mx-auto w-full max-w-2xl px-2">
      <div className="rounded-2xl border-2 border-rose-200 bg-linear-to-b from-white to-rose-50 p-6 shadow-2xl sm:p-8 md:p-10">
        <div className="mb-6 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-500" />
          <div className="h-3 w-3 rounded-full bg-violet-400" />
          <div className="h-2 w-2 rounded-full bg-amber-500" />
        </div>

        <div className="prose prose-sm max-w-none">
          <p
            className={`text-center font-serif text-base leading-relaxed whitespace-pre-line text-amber-950 sm:text-lg ${serif.className}`}
          >
            <span className="font-medium text-amber-900 italic">{message[0]}</span>
            {message[1]}
            <span className="font-medium italic">{message[2]}</span>
            {message[3]}
            <span className="italic">{message[4]}</span>
            {message[5]}
            <span className="text-black">{message[6]}</span>
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
