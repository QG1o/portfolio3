// Contact.jsx
import React, { useState } from 'react' // ✅ useState Import hinzugefügt
import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactExperience.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        // Optional: Hier können Sie später Formspree oder Netlify Forms hinzufügen
        // Beispiel für Formspree:
        // fetch('https://formspree.io/f/YOUR_FORM_ID', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
        
        setFormData({name: '', email: '', message: ''});
        alert('Nachricht gesendet! (Demo-Modus)');
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Schreib mir eine Nachricht"
                    sub="🌐 Kontaktinformationen"
                />

                <div className="mt-16 grid-12-cols">
                    {/*left*/}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-white">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-white">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2 text-white">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white resize-vertical"
                                        required
                                    />
                                </div>

                                <button type="submit">
                                    <div className="cta-button group w-full flex items-center justify-center p-4 bg-white text-black rounded-md hover:bg-amber-900 transition-colors">
                                        <div className="bg-circle" />
                                        <p className="text font-semibold">📩 Nachricht senden</p>
                                        <div className="arrow-wrapper ml-2">
                                            <img src="/images/arrow-right.svg" alt="arrow" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/*right*/}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full bg-[#663e17] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;