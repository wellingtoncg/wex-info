import React from 'react';
import { MessageCircle, MapPin, Monitor } from 'lucide-react'; // Importa os ícones do Lucide React
// Se você tiver um arquivo CSS separado para estilos específicos, importe-o aqui:
import './LinkBioPage.css'; // Exemplo: crie este arquivo e cole o CSS do <style> lá

const LinkBioPage: React.FC = () => {
    return (
        <div className="w-full max-w-md mx-auto rounded-xl shadow-lg p-6 flex flex-col items-center container-card">
            {/* Logo da WexInfo - Caminho atualizado para /logo.png */}
            <img src="/logo.png" alt="Logo WexInfo" className="w-32 h-32 mb-6 rounded-full object-cover" />
            
            {/* Título "Assistência Técnica" com animação */}
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fadeInUp">
                Assistência Técnica
            </h1>

            {/* Descrição "Qualidade e excelência!" com animação */}
            <p className="text-secondary text-lg mb-8 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>Qualidade e excelência!</p>

            {/* Botão para o Site com gradiente WEX */}
            <a href="https://www.wexinfo.com.br" target="_blank"
            className="w-full text-center py-3 px-6 rounded-lg font-semibold text-lg mb-4 shadow-md 
                    text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 transition">
            Visite Nosso Site
            </a>


            {/* Seção Onde Estamos */}
            <div className="w-full text-center mb-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Onde Estamos</h2>

                {/* Loja 1 */}
                <div className="p-4 rounded-lg mb-4 shadow-md container-card">
                    <h3 className="text-xl font-bold text-white mb-2 inline-flex items-center">
                        <Monitor size={24} className="mr-2" /> {/* Ícone de computador do Lucide React */}
                        Loja 1
                    </h3>
                    <p className="text-secondary text-base mb-3">Estrada de Belém, 207, Encruzilhada, Recife - PE</p>
                    <a href="https://wa.me/5581985786235" target="_blank" className="w-full btn-whatsapp text-center py-2 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center mb-2">
                        <MessageCircle size={20} className="mr-2" /> {/* Ícone de WhatsApp do Lucide React */}
                        WhatsApp Loja 1
                    </a>
                    <a href="https://waze.com/ul?q=Estrada%20de%20Bel%C3%A9m%2C%20207%2C%20Encruzilhada%2C%20Recife%20-%20PE" target="_blank" className="w-full btn-waze text-center py-2 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center">
                        <MapPin size={20} className="mr-2" /> {/* Ícone de localização do Lucide React */}
                        Ir para Loja 1
                    </a>
                </div>

                {/* Loja 2 */}
                <div className="p-4 rounded-lg shadow-md container-card">
                    <h3 className="text-xl font-bold text-white mb-2 inline-flex items-center">
                        <Monitor size={24} className="mr-2" /> {/* Ícone de computador do Lucide React */}
                        Loja 2
                    </h3>
                    <p className="text-secondary text-base mb-3">R. Córrego do Euclídes, 457 - Alto José Bonifacio, 02° andar</p>
                    <a href="https://wa.me/5581979118912" target="_blank" className="w-full btn-whatsapp text-center py-2 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center mb-2">
                        <MessageCircle size={20} className="mr-2" /> {/* Ícone de WhatsApp do Lucide React */}
                        WhatsApp Loja 2
                    </a>
                    <a href="https://waze.com/ul?q=R.%20C%C3%B3rrego%20do%20Eucl%C3%ADdes%2C%20457%2C%20Alto%20Jos%C3%A9%20Bonifacio%2C%20Recife%20-%20PE" target="_blank" className="w-full btn-waze text-center py-2 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center">
                        <MapPin size={20} className="mr-2" /> {/* Ícone de localização do Lucide React */}
                        Ir para Loja 2
                    </a>
                </div>
            </div>

            <p className="text-secondary text-sm mt-6">Desenvolvido pela WexInfo</p>
        </div>
    );
};

export default LinkBioPage;
