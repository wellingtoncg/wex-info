import React from 'react';
import { MessageCircle, MapPin, Monitor } from 'lucide-react'; // Importa os ícones do Lucide React
// Se você tiver um arquivo CSS separado para estilos específicos, importe-o aqui:
import './LinkBioPage.css'; // Exemplo: crie este arquivo e cole o CSS do <style> lá

const LinkBioPage: React.FC = () => {
    return (
        // Reduzido o padding-top do container principal de pt-0.5 para pt-0, mantendo px-4 para largura
        <div className="w-full max-w-md mx-auto rounded-xl shadow-lg pt-0 px-4 flex flex-col items-center container-card">
            {/* Logo da WexInfo - Caminho atualizado para /logo.png */}
            {/* Reduzido o margin-bottom da logo de mb-4 para mb-3 */}
            <img src="/logo.png" alt="Logo WexInfo" className="w-32 h-32 mb-3 rounded-full object-cover" />
            
            {/* Título "Assistência Técnica" com animação */}
            {/* Reduzido o margin-bottom do título de mb-2 para mb-1 */}
            <h1 className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fadeInUp">
                Assistência Técnica
            </h1>

            {/* Descrição "Qualidade e excelência!" com animação */}
            {/* Reduzido o margin-bottom da descrição de mb-6 para mb-4 */}
            <p className="text-secondary text-lg mb-4 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>Qualidade e excelência!</p>

            {/* Botão para o Site com gradiente WEX */}
            {/* Reduzido o padding vertical do botão de py-2 para py-1.5 e margin-bottom de mb-3 para mb-2 */}
            <a href="https://www.wexinfo.com.br" target="_blank"
            className="w-full text-center py-1.5 px-6 rounded-lg font-semibold text-lg mb-2 shadow-md 
                    text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 transition">
            Visite Nosso Site
            </a>


            {/* Seção Onde Estamos */}
            {/* Reduzido o margin-bottom da seção de mb-5 para mb-4 */}
            <div className="w-full text-center mb-4">
                {/* Reduzido o margin-bottom do título da seção de mb-3 para mb-2 */}
                <h2 className="text-2xl font-semibold text-white mb-2">Onde Estamos</h2>

                {/* Loja 1 */}
                {/* Reduzido o padding do card de p-3 para p-2 e margin-bottom de mb-3 para mb-2 */}
                <div className="p-2 rounded-lg mb-2 shadow-md store-card"> {/* Classe alterada para store-card */}
                    <h3 className="text-xl font-bold text-white mb-2 inline-flex items-center">
                        <Monitor size={24} className="mr-2" /> {/* Ícone de computador do Lucide React */}
                        Loja 1
                    </h3>
                    {/* Reduzido o margin-bottom do endereço de mb-2 para mb-1 */}
                    <p className="text-secondary text-base mb-1">Estrada de Belém, 207, Encruzilhada, Recife - PE</p>
                    {/* Reduzido o padding vertical dos botões para py-1.5 e margin-bottom de mb-1 para mb-0.5 */}
                    <a href="https://wa.me/5581985786235" target="_blank" className="w-full btn-whatsapp text-center py-1.5 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center mb-0.5">
                        <MessageCircle size={20} className="mr-2" /> {/* Ícone de WhatsApp do Lucide React */}
                        WhatsApp Loja 1
                    </a>
                    {/* Reduzido o padding vertical dos botões para py-1.5 */}
                    <a href="https://waze.com/ul?q=Estrada%20de%20Bel%C3%A9m%2C%20207%2C%20Encruzilhada%2C%20Recife%20-%20PE" target="_blank" className="w-full btn-waze text-center py-1.5 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center">
                        <MapPin size={20} className="mr-2" /> {/* Ícone de localização do Lucide React */}
                        Ir para Loja 1
                    </a>
                </div>

                {/* Loja 2 */}
                {/* Reduzido o padding do card de p-3 para p-2 */}
                <div className="p-2 rounded-lg shadow-md store-card"> {/* Classe alterada para store-card */}
                    <h3 className="text-xl font-bold text-white mb-2 inline-flex items-center">
                        <Monitor size={24} className="mr-2" /> {/* Ícone de computador do Lucide React */}
                        Loja 2
                    </h3>
                    {/* Reduzido o margin-bottom do endereço para mb-1 */}
                    <p className="text-secondary text-base mb-1">R. Córrego do Euclídes, 457 - Alto José Bonifacio, 02° andar</p>
                    {/* Reduzido o padding vertical dos botões para py-1.5 e margin-bottom de mb-1 para mb-0.5 */}
                    <a href="https://wa.me/5581979118912" target="_blank" className="w-full btn-whatsapp text-center py-1.5 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center mb-0.5">
                        <MessageCircle size={20} className="mr-2" /> {/* Ícone de WhatsApp do Lucide React */}
                        WhatsApp Loja 2
                    </a>
                    {/* Reduzido o padding vertical dos botões para py-1.5 */}
                    <a href="https://waze.com/ul?q=R.%20C%C3%B3rrego%20do%20Eucl%C3%ADdes%2C%20457%2C%20Alto%20Jos%C3%A9%20Bonifacio%2C%20Recife%20-%20PE" target="_blank" className="w-full btn-waze text-center py-1.5 px-4 rounded-lg font-semibold text-base shadow-md inline-flex items-center justify-center">
                        <MapPin size={20} className="mr-2" /> {/* Ícone de localização do Lucide React */}
                        Ir para Loja 2
                    </a>
                </div>
            </div>

            {/* Reduzido o margin-top do rodapé de mt-2 para mt-1 */}
            <p className="text-secondary text-sm mt-1">Desenvolvido pela WexInfo</p>
        </div>
    );
};

export default LinkBioPage;
