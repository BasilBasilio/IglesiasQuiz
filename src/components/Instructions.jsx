import Button from './Button'

export default function Instructions() {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="bg-black p-8 w-auto bg-opacity-60 text-center">
            <h1 className="text-5xl font-extrabold text-primary [text-shadow:_0_6px_0_rgb(0_0_0_/_60%)] mb-6">
              Istruzioni
            </h1>
            <p className="text-2xl font-extrabold text-primary">
              1. Al concorrente verranno presentate una alla volta 10 domande
              <br />
              2. Ad ogni domanda corrispondono 4 risposte di cui solo una è
              quella esatta <br />
              3. Il concorrente ha un tempo limitato per rispondere ad ogni
              domanda <br />
              4. Il concorrente vince se indovina tutte le 10 domande <br />
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button link={"/quiz"} className="px-6 py-2 text-lg">
                Inizia
              </Button>
              <Button link={"/"} className="px-6 py-2 text-lg">
                Esci
              </Button>
            </div>
          </div>
        </div>
      </>
    );
}