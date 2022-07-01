import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 1 - Abertura do Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              voluptatibus reprehenderit quis nam recusandae non, magni illum
              doloribus delectus fugiat autem at ipsum officia minus excepturi
              atque cupiditate vero maiores.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href=""
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
