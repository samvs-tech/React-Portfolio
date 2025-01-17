export default function Resume() {
    return (
        <div className="min-h-screen bg-zinc-800 p-6">
            <h1 className="font-mono text-4xl  text-white mb-6 text-center">My Resume</h1>
            <div className="max-w-4xl mx-auto bg-zinc-900 shadow-lg rounded-lg p-8">
                <section className="mb-8">
                    <h2 className="font-sometype text-3xl font-semibold text-white mt-4">Education</h2>
                    <p className="font-sometype text-xl text-white mt-2">
                        Bachelor of Science in Computer Science
                    </p>
                    <p className="font-sometype text-white mt-2">
                        Utah Tech University – Expected Graduation: April, 2027
                    </p>
                    <p className="font-sometype text-xl text-white mt-2">
                        Certificate in FullStack Development
                    </p>
                    <p className="font-sometype text-white mt-2">
                        Ed-X & Utah State University – Expected Graduation: February, 2025 
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="font-sometype text-3xl font-semibold text-white">Experience</h2>
                    <div className="mt-4">
                        <h3 className="font-sometype text-xl font-semibold text-white p-2">Full-Stack Developer</h3>
                        <ul className="font-sometype list-disc list-inside text-white">
                            <li>Developed responsive web applications using React and Node.js.</li>
                            <li>Collaborated with a team to build a dynamic portfolio application.</li>
                        </ul>
                    </div>
                </section>
                <section className="mb-8">
                    <h2 className="font-sometype text-3xl font-semibold text-white p-2">Skills</h2>
                    <ul className="font-sometype list-disc list-inside text-white">
                        <li>JavaScript, TypeScript, React, Node.js</li>
                        <li>HTML5, CSS3, Bootstrap, Tailwind CSS</li>
                        <li>Git, GitHub, Agile Methodologies</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}