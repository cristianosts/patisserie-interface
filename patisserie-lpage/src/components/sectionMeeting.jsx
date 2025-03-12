import { Container } from "./container"

export function SectionMeeting() {
    return (
        <section className="w-full h-[690px] bgheader">
            <Container>

                <article className="m-8">
                    <h1 className="text-5xl text-gray-800 m-8">•Quem Somos?</h1>

                    <p className="text-2xl text-gray-800 m-4 px-12">

                    A Delícias da Carol nasceu do sonho de uma jovem apaixonada pela confeitaria, inspirada pelas memórias afetivas dos sabores da infância. O que começou com a venda de docinhos e empadas na escola, logo se transformou em um negócio que conquistou o paladar da vizinhança. Acreditando no poder dos seus sonhos e na qualidade de seus produtos, a Delícias da Carol trilhou um caminho de sucesso, celebrando cada conquista como o início de uma nova etapa.

                    </p>

                    <h1 className="text-5xl text-gray-800 m-8">•Em que acreditamos?</h1>

                    <p className="text-2xl text-gray-800 m-4 px-12">

                    Acreditamos na importância de receitas tradicionais, com um toque de inovação, buscando assim acompanhar as tendências do mercado, sem perder a essência da nossa marca. Acreditamos que cada doce conta uma história, por isso a importância da qualidade é sempre levada em conta desde a produção ao atendimento.

                    </p>

                    <span className="text-2xl text-white flex justify-center pt-[30px]">▼</span>
                </article>

            </Container>
        </section>
    )
}