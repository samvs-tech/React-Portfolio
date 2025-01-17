export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800 p-6">
            <h1 className="text-4xl font-mono text-white mb-6">Contact Me</h1>
            <form className="w-full max-w-lg bg-zinc-900 shadow-lg rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="name" className="font-sometype block text-white font-semibold mb-2">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Your Name" 
                        className="font-sometype w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="font-sometype block text-white font-semibold mb-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Your Email" 
                        className="font-sometype w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-white font-semibold font-sometype mb-2">Message</label>
                    <textarea 
                        id="message" 
                        rows="4" 
                        placeholder="Your Message" 
                        className="font-sometype w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="font-sometype w-full bg-black text-white p-3 rounded-lg hover:bg-zinc-400 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
