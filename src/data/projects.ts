import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Construction CRM",
    title: "Construction CRM(Buildrun)",
    description:
      "Buildrun is a true construction process automation platform that helps builders plan, deploy, track & manage end to end project development",
    icon: "/skills/buildrun.jpg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://www.buildrun.app/",
    tags: ["Java", "Vertx", "Mysql", "GCP"],
  },
  {
    id: "E-Commerce(Kurlon)",
    title: "E-commerce(Kurlon)",
    description:
      "Kurlon is India's top mattress brand. Buy coir, foam, and spring mattresses online for a better sleep experience..",
    icon: "/skills/kurlon.webp",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://kurlon.com/",
    tags: ["Golnag", "NodeJs", "ReactJS", "Fiber","MongoDB","Postgress","AWS"],
  },
  {
    id: "E-Commerce(The Autoparts Shop)",
    title: "E-Commerce(The Autoparts Shop)",
    description:
      "AutoPartsShop.com is a leading supplier of auto parts for the vehicles. TheAutopartShop distributes the auto parts in 48 states, within the US.",
    icon: "/skills/auto.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://www.theautopartsshop.com/",
    tags: ["Golnag", "NodeJs", "ReactJS", "Gin","MongoDB","Postgress","AWS"],
  }
];
export default projects;
