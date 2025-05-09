import React, { useState } from 'react';
import { Send, Phone, AtSign } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute right-0 -bottom-40 w-80 h-80 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8B5CF6" d="M47.1,-58.5C59.9,-47.5,68.7,-31.6,72,-14.5C75.3,2.7,73.2,21,64.2,34.9C55.2,48.9,39.3,58.5,22.5,64.7C5.7,70.9,-12,73.7,-26.2,68C-40.3,62.3,-50.9,48.1,-59,32.1C-67.2,16.1,-72.8,-1.8,-69.7,-17.5C-66.6,-33.2,-54.7,-46.8,-41,-57.7C-27.2,-68.6,-11.8,-76.8,3.1,-80.4C18,-84,34.3,-69.5,47.1,-58.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale Conosco</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
          
        
          <div className="flex flex-col justify-between">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl mb-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Phone className="mr-2 text-purple-500" size={24} />
                <span>Contato Direto</span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Para atendimento mais rápido, entre em contato pelo nosso WhatsApp ou ligue para nós.
                </p>
                
                <a 
                  href="https://wa.me/5581985786235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-green-400 transition"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5a5 5 0 0 0 5 0" />
                  </svg>
                  <span>(81) 98578-6235</span>
                </a>
                
                <a 
                  href="tel:+5581985786235" 
                  className="flex items-center text-white hover:text-purple-400 transition"
                >
                  <Phone className="mr-2" size={18} />
                  <span>(81) 98578-6235</span>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <AtSign className="mr-2 text-purple-500" size={24} />
                <span>Redes Sociais</span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Siga-nos nas redes sociais para ficar por dentro das novidades e promoções.
                </p>
                
                <a 
                  href="https://www.instagram.com/wexinfo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-pink-400 transition"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>@wexinfo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;