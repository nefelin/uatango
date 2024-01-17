import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-4 mb-20">
        <h1 className="text-4xl">
          Welcome to the home of Argentine Tango at the University of Arizona!
        </h1>
        <span className="text-xl">
          Now hosting weekly classes! Check our{" "}
          <Link href="/schedule" className="text-blue-600">
            schedule
          </Link>{" "}
          page for details
        </span>
      </div>
      <div className="w-[90%]">
        <div className="flex justify-between">
          <div className="flex gap-8 flex-col w-1/2">
            <h2 className="text-2xl">What is Tango?</h2>
            <p>
              Argentine Tango is a captivating dance that emerged from the
              melting pot of cultures in Argentina during the early 1900s.
              Originating in the urban slums of Buenos Aires, it evolved from a
              blend of African, European, and native influences, reflecting the
              diverse and dynamic society of Argentina at the time. This fusion
              gave birth to a dance rich in passion, complexity, and a unique
              style that resonated with people from all walks of life.
            </p>

            <p>
              Argentine Tango is deeply improvisational, making each dance an
              unrehearsed creation that mirrors the spontaneity and fluidity of
              a jazz improvisation. In Tango, the dancers engage in a non-verbal
              dialogue, where movements are proposed, responded to, and
              elaborated upon in real-time, creating an ever-evolving tapestry
              of expression.
            </p>

            <p>
              Each dance is a unique journey, where intricate footwork and close
              physical communication blend seamlessly, turning complex emotions
              and technical challenges into an intimate, expressive, game with
              your partner.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/eric_rebecca_gancho.jpeg"
              width={300}
              height={400}
              alt="A photo of Eric Lindgren and Rebecca Rorick Smith dancing Tango"
              className="rounded-2xl "
            />
            <span className="text-xs mt-2 text-gray-200">
              Eric Lindgren and Rebecca Rorick Smith
            </span>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex gap-8 flex-col w-1/2">
            <h2 className="text-2xl">What does tango look like?</h2>
            <p>
              Often confused with its cousin, Ballroom Tango, Argentine Tango
              can be difficult to classify. Because of the tremendous breadth of
              options for vocabulary, style, and expressive choices, Argentine
              Tango can take many forms.
            </p>
            <p>
              Below is a sampling of performances we feel represent the
              diversity of this dance. If you want to explore further{" "}
              <a
                href="https://youtube.com/playlist?list=PLu_9_ehHXqJZSXVN-NLPfzppN3zSptLk-&si=f8YXKAdcNt_q0-wS"
                className="text-blue-600"
              >
                here is a playlist
              </a>{" "}
              with many more excellent performances.
            </p>
          </div>
          <div className="grid-cols-2 gap-8 grid mt-10">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AL9scCF6F1E?si=hQugYWjUUJyzT-pV"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rcT_6CsHiNk?si=jWNi7KonoJCUeYOj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sjRh64FrmOQ?si=I6AK3C_2d5UmUfcT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/19u386DjB08?si=WfixhdMVXW_dTCj1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
