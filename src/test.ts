type Social = {
    type: "social";
    linkedinUrl: string;
    likes: number;
};

type Learn = {
    type: "learn";
    youtube: string;
    gpt: string;
};

type Project<ProjectData> = {
    title: string;
    data: ProjectData;
};

const copyProject = <ProjectData>(project: Project<ProjectData>) => {
    return {
        title: `${project.title} copy`,
        data: JSON.stringify(project.data),
    };
};

console.log(
    copyProject({
        title: "Reprendre la bonne parole sur TS",
        data: {type: "social", linkedinUrl: "owrijeoirwej", likes: -2},
    })
);

console.log(
    copyProject({
        title: "Reprendre la bonne parole sur RoR",
        data: {type: "social", linkedinUrl: "owrijeoirwej", likes: 12},
    })
);

console.log(
    copyProject<{x: number; y: number}>({
        title: "Apprendre RoR",
        data: {x: 1, y: 2},
    })
);