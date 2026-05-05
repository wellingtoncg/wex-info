import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-8"
        >
          <ArrowLeft size={18} />
          Voltar para o início
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidade</h1>
        <p className="text-gray-500 text-sm mb-8">Última atualização: maio de 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Quem somos</h2>
            <p>
              A <strong>Wex Info Assistência Técnica</strong>, inscrita no CNPJ sob o n.º 56.045.009/0001-73,
              com sede na Estr. de Belém, 207 – Campo Grande, Recife – PE, CEP 52041-760, é responsável
              pelo tratamento dos dados pessoais coletados neste site (<a href="https://www.wexinfo.com.br" className="text-purple-400 hover:underline">www.wexinfo.com.br</a>).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Dados que coletamos</h2>
            <p>Podemos coletar os seguintes dados pessoais ao utilizar nosso site ou entrar em contato conosco:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nome e sobrenome</li>
              <li>Número de telefone / WhatsApp</li>
              <li>Endereço de e-mail</li>
              <li>Mensagem enviada pelo formulário de contato</li>
              <li>Dados de navegação (IP, navegador, páginas visitadas — via cookies analíticos)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalidade do tratamento</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Responder às suas solicitações de orçamento ou suporte técnico</li>
              <li>Entrar em contato para agendar atendimento</li>
              <li>Melhorar a experiência de navegação no site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Base legal (LGPD – Lei 13.709/2018)</h2>
            <p>
              O tratamento de dados é realizado com base nas seguintes hipóteses legais previstas na Lei Geral de
              Proteção de Dados (LGPD):
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Consentimento</strong> — ao preencher formulários ou entrar em contato voluntariamente</li>
              <li><strong>Execução de contrato</strong> — para prestação dos serviços de assistência técnica</li>
              <li><strong>Legítimo interesse</strong> — para melhoria do site e comunicação comercial pertinente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Compartilhamento de dados</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais.
              Podemos compartilhá-los apenas com prestadores de serviço estritamente necessários para a operação
              do site (ex.: plataforma de hospedagem, analytics) ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
            <p>
              Este site pode utilizar cookies técnicos (necessários para o funcionamento) e cookies analíticos
              (para entender como você navega no site, via Google Analytics). Você pode desativar os cookies
              nas configurações do seu navegador, porém isso pode afetar a experiência de uso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Seus direitos</h2>
            <p>De acordo com a LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar, corrigir ou atualizar seus dados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, entre em contato pelo e-mail{' '}
              <a href="mailto:wexinforecife@gmail.com" className="text-purple-400 hover:underline">
                wexinforecife@gmail.com
              </a>{' '}
              ou pelo telefone <a href="tel:+5581985786235" className="text-purple-400 hover:underline">(81) 98578-6235</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Segurança dos dados</h2>
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acessos não
              autorizados, perda, destruição ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Retenção de dados</h2>
            <p>
              Seus dados são mantidos pelo tempo necessário para cumprir a finalidade para a qual foram coletados
              ou para atender a exigências legais, após o que são eliminados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente.
              A data da última atualização sempre estará indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:
            </p>
            <address className="not-italic mt-2 space-y-1">
              <p><strong>Wex Info Assistência Técnica</strong></p>
              <p>Estr. de Belém, 207 – Campo Grande, Recife – PE</p>
              <p>
                Telefone:{' '}
                <a href="tel:+5581985786235" className="text-purple-400 hover:underline">
                  (81) 98578-6235
                </a>
              </p>
              <p>
                E-mail:{' '}
                <a href="mailto:contato@wexinfo.com.br" className="text-purple-400 hover:underline">
                  contato@wexinfo.com.br
                </a>
              </p>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
