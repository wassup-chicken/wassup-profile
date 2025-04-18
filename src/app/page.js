import SkillBubble from "./components/skillbubble";

export default function Home() {
  const skills = {
    languages: [
      { name: "Javascript", level: "A" },
      { name: "Golang", level: "B" },
      { name: "Java", level: "A" },
      { name: "Python", level: "B" }
    ],
    frameworks: [
      { name: "React", level: "B" },
      { name: "Next.js", level: "B" },
      { name: "Tailwind CSS", level: "B" }
    ],
    systems: [
      { name: "NetSuite", level: "A" },
      { name: "Stripe", level: "A" },
      { name: "Workato", level: "A" }
    ]
  };

  return (
    <>
      <div className="flex text-2xl font-bold justify-start m-10">Languages</div>
      <div className="grid grid-cols-3 gap-y-10 gap-x-10 justify-center mt-10">
        {skills.languages.map((s) => (
          <SkillBubble key={s.name} name={s.name} level={s.level} />
        ))}
      </div>

      <div className="flex text-2xl font-bold justify-start m-10">Frameworks/Libraries</div>
      <div className="grid grid-cols-3 gap-y-10 gap-x-10 justify-center mt-10">
        {skills.frameworks.map((s) => (
          <SkillBubble key={s.name} name={s.name} level={s.level} />
        ))}
      </div>

      <div className="flex text-2xl font-bold justify-start m-10">Systems/Tools</div>
      <div className="grid grid-cols-3 gap-y-10 gap-x-10 justify-center mt-10">
        {skills.systems.map((s) => (
          <SkillBubble key={s.name} name={s.name} level={s.level} />
        ))}
      </div >
    </>
  );
}
