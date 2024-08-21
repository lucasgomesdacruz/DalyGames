import { GameProps } from "@/utils/types/game";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameCard } from "@/components/GameCard";

async function getData(title: string) {
    console.log("Parâmetro: " + title);

    try {
        const decodeTitle = decodeURI(title)
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`);
        if (!res.ok) {
            throw new Error('Erro na resposta da API');
        }
        return res.json();
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        return []; 
    }
}

export default async function Search({
    params: { title }
}: {
    params: { title: string }
}) {
    const games: GameProps[] = await getData(title);

    return (
        <main className="w-full text-black">
            <Container>
                <Input />
                <h1 className="font-bold text-xl mt-8 mb-5">Veja o que encontramos na nossa base:</h1>
                {!games.length ? (
                    <p>Esse jogo não foi encontrado!...</p>
                ) : (
                    <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {games.map((item) => (
                            <GameCard key={item.id} data={item} />
                        ))}
                    </section>
                )}
            </Container>
        </main>
    );
}
