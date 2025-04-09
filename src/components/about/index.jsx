import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Resumem de minha jornada
          </h2>

          <div className="grid gap-2">
            <p className="font-light  text-xs sm:text-sm md:text-base   ">
              Sou desenvolvedor com experiência em front-end, mobile, análise de sistemas e requisitos. Tenho perfil colaborativo, foco em qualidade e prazos, facilidade para me adaptar a novas tecnologias e enfrentar desafios.
            </p>
            <p>
              Atuei como responsável pelo front-end em projetos de grande escala, desde a escolha de tecnologias até a entrega final. Dentre os destaques, participei do desenvolvimento de um sistema para monitoramento de ativos e gestão de peças na indústria automotiva, com mapa indoor interativo e dashboards analíticos, e também de um sistema nacional de rastreamento de veículos, com alertas inteligentes e geofences personalizadas usando a API do Google Maps.
            </p>
            <p>
              Atualmente, trabalho como analista de requisitos (part-time), contribuindo com a definição funcional e documentação técnica de um novo módulo de mapas, colaborando com equipes de produto e desenvolvimento para garantir soluções eficazes e alinhadas ao negócio.
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">anos de experiência</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=leandrogcruzp&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Leandro G Cruz P - Top Langs"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=leandrogcruzp&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,js,ts,css,tailwind,bootstrap,sass,styledcomponents,npm,yarn,pnpm,vite,react,nextjs,babel,vue,nuxt,vuetify,pinia,nodejs,express,redux,threejs,jest,electron,docker,aws,mongodb,mysql,postgres,sqlite,prisma,firebase,gatsby,netlify,vercel,git,github,githubactions,gitlab,figma,notion,linux,ubuntu,windows,apple,vscode,neovim,vim,eclipse,discord`}
            alt="Leandro G Cruz P - Skills"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
