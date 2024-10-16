import Button from './Button'

export default function GameOverModal() {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="bg-black p-8 w-auto bg-opacity-60 text-center">
            <h1 className="text-5xl font-extrabold text-primary [text-shadow:_0_6px_0_rgb(0_0_0_/_60%)]">
              Risposta errata!
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <Button link={"/quiz"}>Riprova</Button>
              <Button link={"/"}>Esci</Button>
            </div>
          </div>
        </div>
      </>
    );
}