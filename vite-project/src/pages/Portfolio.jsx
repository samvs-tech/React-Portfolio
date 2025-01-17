import PortfolioUI from "../components/UI/PortfolioUI";

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-zinc-800 p-6">
            <h1 className="font-mono text-4xl text-white mb-6 text-center">My Portfolio</h1>
            <PortfolioUI 
                projects={[
                    {
                        key: 1,
                        img: "https://images.unsplash.com/photo-1678846851878-9a8445a4fb5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
                        title: "Kanban Board",
                        description: "A visual project management tool that helps organize workflow and track tasks to completion. Add tasks to columns in 3 seperate cateogories depending on stage of completion.",
                        link: "https://kanban-board-lhup.onrender.com/",
                        githubLink: "https://github.com/samvs-tech/Kanban-Board"
                    },
                    {
                        key: 2,
                        img: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
                        title: "Weather Dashboard",
                        description: "Simple but useful weather dashboard! Search any city and recieve a daily and 5 day forecast!",
                        link: "https://weather-dashboard-oai9.onrender.com/",
                        githubLink: "https://github.com/samvs-tech/Weather-Dashboard"
                    },
                    {
                        key: 3,
                        img: "https://github.com/samvs-tech/Canidate-Search/blob/main/candidate-search-p.png?raw=true", // Replace with actual image
                        title: "Candidate Search",
                        description: ` "Candidate Finder" is a React-based web application that leverages the GitHub API to discover suitable candidates.`,
                        link: "https://fascinating-faun-5585e3.netlify.app/",
                        githubLink: "https://github.com/samvs-tech/Canidate-Search"
                    },
                    {
                        key: 4,
                        img: "https://images.unsplash.com/photo-1526626607369-f89fe1ed77a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
                        title: "Vehicle Builder",
                        description: "A vehicle building application that allows us to create vehicles and perform specific actions with them.",
                        link: "https://drive.google.com/file/d/18r7hfLweGnkRWpdI2zL8AqX46Y1JeR5U/view",
                        githubLink: "https://github.com/samvs-tech/Vehicle-Builder"
                    }
                ]}
            />
        </div>
    );
}
