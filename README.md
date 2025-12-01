#  Clínica Viveris

Site institucional completo desenvolvido para uma clínica médica fictícia, com foco em arquitetura front-end, validação de formulários e experiência do usuário (UX).

🔗 **Acesse o projeto online:** [Clique aqui para visitar](https://marinhocordeirodavi-ui.github.io/clinica-viveris/)

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação correta de seções, cabeçalhos e navegação.
* **CSS3 (Moderno):**
    * Layout Responsivo (Mobile First).
    * Uso de Flexbox para alinhamento de componentes.
    * Variáveis CSS para consistência de cores.
* **JavaScript (Vanilla ES6+):**
    * Manipulação do DOM.
    * Validação de formulários com **Regex** (Expressões Regulares).
    * Lógica de datas (bloqueio de datas passadas).
    * Uso de `localStorage` para persistência temporária de dados.

## ✨ Funcionalidades do Projeto

1.  **Validação de Formulário Robusta (`validacao.js`):**
    * Verificação de e-mail válido via Regex.
    * Validação de nome completo (exige pelo menos dois nomes).
    * Lógica de data: impede o usuário de agendar consultas no passado.
    * Feedback visual imediato em caso de erro (bordas vermelhas e mensagens de alerta).
2.  **Arquitetura Organizada (MVC Front-end):**
    * Separação clara de responsabilidades:
        * `/src/css`: Estilização global.
        * `/src/js`: Lógicas e scripts.
        * `/src/pages`: Páginas internas.
        * `/src/img`: Assets otimizados.
3.  **Simulação de Agendamento:**
    * Ao confirmar o formulário, os dados são salvos no navegador e exibidos em uma página de confirmação personalizada.
4.  **Navegação Multi-page:** Site com múltiplas páginas interligadas (Início, Sobre, Serviços, Contato).

## 📂 Estrutura de Pastas

```bash
/
├── index.html          # Página Inicial (Landing Page)
├── README.md           # Documentação
└── src/
    ├── css/            # Folhas de estilo
    ├── img/            # Imagens otimizadas
    ├── js/             # Scripts de validação
    └── pages/          # Páginas internas (Contato, Serviços, etc.)
