import Button from './Button'

export default function Home() {
    return (
      <>
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-black p-8 w-auto bg-opacity-70 text-center">
              <h1 className="text-5xl font-extrabold text-primary [text-shadow:_0_6px_0_rgb(0_0_0_/_60%)]">
                DEFEAT CARLO CONTY
              </h1>
              <h2 className="text-2xl font-extrabold text-primary">--------------- Iglesias edition  --------------</h2>
              <div className="flex flex-col justify-center items-center space-y-4">
                <Button link={"/quiz"}>
                  Inizia
                </Button>
                <Button link={"/instructions"}>Istruzioni</Button>
              </div>
            </div>
          </div>
      </>
    );
  }