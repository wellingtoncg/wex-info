import React from 'react';
import { MessageCircle, MapPin, Monitor, Globe } from 'lucide-react';
import './LinkBioPage.css'; 

const LinkBioPage: React.FC = () => {
    return (
        <div className="w-full max-w-md mx-auto rounded-xl shadow-lg pt-4 px-4 flex flex-col items-center container-card">
            
            {/* Logo da WexInfo */}
            <img 
                src="/logo.png" 
                alt="Logo WexInfo" 
                className="w-32 h-32 mb-4 rounded-full object-cover shadow-sm" 
            />
            
            {/* Cabeçalho */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fadeInUp">
                    Assistência Técnica
                </h1>
                <p className="text-secondary text-lg animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    Qualidade e excelência!
                </p>
            </div>

            {/* Link Principal: Website */}
            <a 
                href="https://www.wexinfo.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-6 rounded-lg font-semibold text-lg mb-6 shadow-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 transition inline-flex items-center justify-center"
            >
                <Globe size={20} className="mr-2" />
                Visite Nosso Site
            </a>

            {/* Seção Única: Loja 1 */}
            <div className="w-full mb-6">
                <div className="p-4 rounded-lg shadow-md store-card border border-white/10 flex flex-col items-center">
                    <h3 className="text-xl font-bold text-white mb-3 inline-flex items-center">
                        <Monitor size={24} className="mr-2" />
                        Nossa Loja
                    </h3>
                    
                    <p className="text-secondary text-base mb-4 text-center">
                        Estrada de Belém, 207, Encruzilhada, Recife - PE
                    </p>

                    {/* Botões de Ação */}
                    <div className="w-full flex flex-col gap-2">
                        <a 
                            href="https://wa.me/5581985786235" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full btn-whatsapp text-center py-2.5 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center transition-all"
                        >
                            <MessageCircle size={20} className="mr-2" />
                            Falar no WhatsApp
                        </a>

                        <a 
                            href="https://waze.com/ul?q=Estrada%20de%20Bel%C3%A9m%2C%20207%2C%20Encruzilhada%2C%20Recife%20-%20PE" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full btn-waze text-center py-2.5 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center transition-all"
                        >
                            <MapPin size={20} className="mr-2" />
                            Como Chegar (Waze)
                        </a>
                    </div>
                </div>
            </div>

            {/* Rodapé */}
            <footer className="mt-auto pb-4">
                <p className="text-secondary text-sm opacity-70">Desenvolvido pela WexInfo</p>
            </footer>
        </div>
    );
};

export default LinkBioPage;