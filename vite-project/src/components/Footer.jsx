import githubPhoto from "../assets/github-rounded-svgrepo-com.png"
import linkedinPhoto from "../assets/linkedin-rounded-svgrepo-com.png"


export default function Footer() {
    return (
        <footer className="bg-white text-white p-6">
            <h1 className="font-sometype tracking-widest text-4xl text-gray-900 font-bold">Sam Kelly</h1>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://www.linkedin.com/in/michael-kelly-tech/" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={linkedinPhoto} 
                        alt="LinkedIn Logo" 
                        className="w-8 h-8 hover:opacity-75"
                    />
                </a>
                <a href="https://github.com/samvs-tech" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={githubPhoto}
                        alt="Github logo" 
                        className="w-8 h-8 hover:opacity-75"
                    />
                </a>
            </div>
            <p className="mt-4 font-sometype tracking-widest text-gray-900 text-sm">© {new Date().getFullYear()} Sam Kelly. All rights reserved.</p>
        </footer>
    );
}
