import { useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Icon } from "@iconify-icon/react";

const Contact = () => {
    const text = "Currently available for freelance work or Job Positions.";
    
    // 1. Estados para los datos y el estatus del envío
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // 2. Función para actualizar los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // 3. Función de envío al Backend
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", subject: "", message: "" }); // Limpiar formulario
                // Resetear el mensaje de éxito después de 5 segundos
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };
    
    return <section id="contact" className="flex flex-col justify-between min-h-screen bg-black">
        <div>
            <AnimatedHeaderSection
               subTitle="Get in touch"
               title="Contact"
               text={text}
               textColor="text-white"
               withScrollTrigger={true}
            />
            
            <div className="px-10 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center gap-8 font-light text-white">
                        <div>
                            <h2 className="text-2xl lg:text-3xl uppercase mb-4">E-mail</h2>
                            <div className="w-full h-px bg-white/30 mb-4"/>
                            <a 
                                href="mailto:contacto@santiorduno.com"
                                className="text-xl lg:text-2xl tracking-wider lowercase hover:underline block mb-6"
                            >
                                contacto@santiorduno.com
                            </a>
                            <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                                Have a project in mind or want to collaborate? Fill out the form and I'll get back to you within 24 hours. Let's create something amazing together.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="font-light">
                        <h2 className="text-2xl lg:text-3xl text-white uppercase mb-8">Send a Message</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 disabled:opacity-50"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 disabled:opacity-50"
                                    placeholder="your@email.com"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 disabled:opacity-50"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button & Status Feedback */}
                            <div className="flex flex-col gap-4">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting' || status === 'success'}
                                    className={`w-full px-6 py-4 rounded-lg font-light text-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2
                                        ${status === 'success' ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-gray-200'}
                                        ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}
                                    `}
                                >
                                    {status === 'submitting' ? (
                                        <>Sending...</>
                                    ) : status === 'success' ? (
                                        <>Message Sent <Icon icon="lucide:check" className="size-5" /></>
                                    ) : (
                                        <>Send Message <Icon icon="lucide:send" className="size-5" /></>
                                    )}
                                </button>
                                
                                {status === 'error' && (
                                    <p className="text-red-400 text-center text-sm">
                                        Something went wrong. Please try again or email me directly.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section> 
};

export default Contact;