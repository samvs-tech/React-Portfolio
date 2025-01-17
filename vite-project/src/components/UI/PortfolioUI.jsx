export default function PortfolioUI({ projects }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-cols-3 gap-9 p-9">
            {projects.map((project) => (
                <div 
                    key={project.key} 
                    className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                >
                    <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-96 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="font-sometype text-xl font-semibold text-white mb-2">{project.title}</h2>
                        <p className="font-sometype text-white mb-4">{project.description}</p>
                        <div className="flex space-x-4">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-sometype text-orange-500 hover:text-white underline"
                            >
                                Live Demo
                            </a>
                            <a 
                                href={project.githublink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-sometype text-orange-500 hover:text-white underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
