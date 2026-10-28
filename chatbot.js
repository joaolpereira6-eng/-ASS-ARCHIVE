/**
 * Chatbot Widget Auto-Injetável - Estilo [ASS] ARCHIVE (Controlo Direto de Visibilidade)
 */
(function () {
  if (window.chatbotInicializado) return;
  window.chatbotInicializado = true;

  const cssStyles = `
    #faq-chatbot-widget {
      font-family: 'Inter', -apple-system, sans-serif !important;
      position: fixed !important;
      bottom: 20px !important;
      right: 20px !important;
      z-index: 99999999 !important;
    }

    #faq-toggle-btn {
      width: 60px !important;
      height: 60px !important;
      border-radius: 50% !important;
      background: #39FF14 !important;
      color: #000000 !important;
      border: 1px solid #39FF14 !important;
      box-shadow: 0 0 15px rgba(57, 255, 20, 0.4) !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      outline: none !important;
      transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    }

    #faq-toggle-btn:hover {
      transform: scale(1.05) !important;
      box-shadow: 0 0 20px rgba(57, 255, 20, 0.7) !important;
    }

    #faq-toggle-btn svg {
      width: 28px !important;
      height: 28px !important;
      fill: #000000 !important;
      pointer-events: none !important;
    }

    #faq-chat-window {
      position: fixed !important;
      bottom: 90px !important;
      right: 20px !important;
      width: 360px !important;
      max-width: calc(100vw - 40px) !important;
      height: 500px !important;
      max-height: calc(100vh - 120px) !important;
      background-color: #121712 !important;
      border: 1px solid rgba(57, 255, 20, 0.4) !important;
      border-radius: 16px !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8) !important;
      display: none !important;
      flex-direction: column !important;
      overflow: hidden !important;
      z-index: 99999999 !important;
    }

    .faq-header {
      background: #0A0D0A !important;
      color: #39FF14 !important;
      border-bottom: 1px solid rgba(57, 255, 20, 0.3) !important;
      padding: 14px 16px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      font-family: 'Oswald', sans-serif !important;
      text-transform: uppercase !important;
      letter-spacing: 1px !important;
    }

    .faq-header-actions {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
    }

    .faq-header h3 {
      margin: 0 !important;
      font-size: 16px !important;
      color: #39FF14 !important;
    }

    .faq-icon-btn {
      background: transparent !important;
      border: none !important;
      color: #39FF14 !important;
      font-size: 18px !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 2px !important;
      opacity: 0.85;
    }

    .faq-icon-btn:hover {
      opacity: 1;
    }

    #faq-messages {
      flex: 1 !important;
      padding: 14px !important;
      overflow-y: auto !important;
      background-color: #0A0D0A !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
    }

    .faq-msg {
      max-width: 85% !important;
      padding: 10px 12px !important;
      border-radius: 12px !important;
      font-size: 13px !important;
      line-height: 1.4 !important;
    }

    .faq-msg.bot {
      align-self: flex-start !important;
      background-color: #121712 !important;
      color: #F4F4F5 !important;
      border: 1px solid rgba(57, 255, 20, 0.3) !important;
    }

    .faq-msg.user {
      align-self: flex-end !important;
      background-color: #39FF14 !important;
      color: #000000 !important;
      font-weight: 600 !important;
    }

    .faq-msg.system-info {
      align-self: center !important;
      background-color: rgba(57, 255, 20, 0.1) !important;
      color: #39FF14 !important;
      font-size: 11px !important;
      border-radius: 8px !important;
      padding: 6px 10px !important;
      text-align: center !important;
      border: 1px dashed #39FF14 !important;
    }

    .faq-options {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 6px !important;
      margin-top: 4px !important;
    }

    .faq-chip {
      background-color: #121712 !important;
      color: #39FF14 !important;
      border: 1px solid rgba(57, 255, 20, 0.4) !important;
      padding: 8px 12px !important;
      border-radius: 16px !important;
      font-size: 11px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
    }

    .faq-chip:hover {
      background-color: #39FF14 !important;
      color: #000000 !important;
    }

    .faq-footer {
      padding: 12px !important;
      background-color: #121712 !important;
      border-top: 1px solid rgba(57, 255, 20, 0.3) !important;
    }

    .faq-input-area {
      display: flex !important;
      gap: 8px !important;
      margin: 0 !important;
    }

    #faq-input {
      flex: 1 !important;
      padding: 10px 14px !important;
      background-color: #0A0D0A !important;
      color: #FFFFFF !important;
      border: 1px solid rgba(57, 255, 20, 0.3) !important;
      border-radius: 20px !important;
      font-size: 13px !important;
      outline: none !important;
    }

    #faq-input:focus {
      border-color: #39FF14 !important;
    }

    #faq-send-btn {
      background-color: #39FF14 !important;
      color: #000000 !important;
      border: none !important;
      width: 38px !important;
      height: 38px !important;
      border-radius: 50% !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    #faq-send-btn svg {
      width: 16px !important;
      height: 16px !important;
      fill: #000000 !important;
    }
  `;

  const htmlTemplate = `
    <button id="faq-toggle-btn" type="button" aria-label="Abrir Chatbot">
      <svg id="faq-icon-open" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
      </svg>
      <svg id="faq-icon-close" viewBox="0 0 24 24" style="display: none;">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>

    <div id="faq-chat-window">
      <div class="faq-header">
        <h3>[ASS] BOT ARCHIVE</h3>
        <div class="faq-header-actions">
          <label for="faq-json-file" class="faq-icon-btn" title="Anexar base JSON extra">📁</label>
          <input type="file" id="faq-json-file" accept=".json" style="display: none;" />
          <button type="button" id="faq-close-btn" class="faq-icon-btn">✕</button>
        </div>
      </div>
      <div id="faq-messages"></div>
      <div class="faq-footer">
        <div class="faq-input-area">
          <input type="text" id="faq-input" placeholder="Pergunte algo ao ateliê..." autocomplete="off" />
          <button type="button" id="faq-send-btn" aria-label="Enviar">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  const FAQ_PADRAO = [
    { titulo: "🕒 Horário do Ateliê", keywords: ["horario", "horas", "funciona", "aberto"], resposta: "Atendemos de **Segunda a Sexta, das 09h às 18h** e **Sábados das 09h às 13h**." },
    { titulo: "💳 Formas de Pagamento", keywords: ["pagamento", "pagar", "pix", "cartao", "boleto"], resposta: "Aceitamos **Pix**, **Cartão de Crédito** e parcelamos em até 12x." },
    { titulo: "📍 Localização", keywords: ["onde", "endereco", "localizacao", "fica"], resposta: "Nosso ateliê fica na **Rua Tabapuã, 479 - Itaim Bibi, SP**." },
    { titulo: "📞 WhatsApp Direct", keywords: ["contato", "atendente", "whatsapp", "telefone"], resposta: "Fale direto no nosso WhatsApp: **(11) 92220-5794**." }
  ];

  let baseConhecimento = [...FAQ_PADRAO];

  window.initChatbot = function (opcoes = {}) {
    if (document.getElementById("faq-chatbot-widget")) return;

    const styleTag = document.createElement("style");
    styleTag.textContent = cssStyles;
    document.head.appendChild(styleTag);

    const container = document.createElement("div");
    container.id = "faq-chatbot-widget";
    container.innerHTML = htmlTemplate;
    document.body.appendChild(container);

    const toggleBtn = document.getElementById("faq-toggle-btn");
    const closeBtn = document.getElementById("faq-close-btn");
    const chatWindow = document.getElementById("faq-chat-window");
    const iconOpen = document.getElementById("faq-icon-open");
    const iconClose = document.getElementById("faq-icon-close");
    const messagesBox = document.getElementById("faq-messages");
    const sendBtn = document.getElementById("faq-send-btn");
    const input = document.getElementById("faq-input");
    const jsonFileInput = document.getElementById("faq-json-file");

    // Força o estado inicial a escondido
    chatWindow.style.setProperty("display", "none", "important");

    function addMessage(texto, tipo) {
      const div = document.createElement("div");
      div.className = `faq-msg ${tipo}`;
      div.innerHTML = texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      messagesBox.appendChild(div);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    function carregarMenuInicial() {
      messagesBox.innerHTML = "";
      addMessage("Salve! ☣️ Como posso ajudar você no [ASS] ARCHIVE?", "bot");

      const optsContainer = document.createElement("div");
      optsContainer.className = "faq-options";

      baseConhecimento.forEach(item => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "faq-chip";
        btn.innerText = item.titulo || item.pergunta;
        btn.addEventListener("click", () => {
          addMessage(item.titulo || item.pergunta, "user");
          setTimeout(() => addMessage(item.resposta, "bot"), 200);
        });
        optsContainer.appendChild(btn);
      });

      messagesBox.appendChild(optsContainer);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    function normalizarTexto(txt) {
      return txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "");
    }

    function buscarResposta(textoUsuario) {
      const queryNorm = normalizarTexto(textoUsuario);
      const palavrasUsuario = queryNorm.split(/\s+/).filter(w => w.length > 2);

      let melhorMatch = null;
      let maiorPontuacao = 0;

      baseConhecimento.forEach(item => {
        let pontos = 0;
        const pergunta = normalizarTexto(item.titulo || item.pergunta || "");
        const resposta = normalizarTexto(item.resposta || "");

        if (pergunta.includes(queryNorm)) pontos += 10;

        palavrasUsuario.forEach(palavra => {
          if (pergunta.includes(palavra)) pontos += 3;
          if (resposta.includes(palavra)) pontos += 1;
          if (item.keywords && Array.isArray(item.keywords)) {
            item.keywords.forEach(kw => {
              if (normalizarTexto(kw).includes(palavra)) pontos += 4;
            });
          }
        });

        if (pontos > maiorPontuacao) {
          maiorPontuacao = pontos;
          melhorMatch = item;
        }
      });

      if (melhorMatch && maiorPontuacao >= 3) {
        return melhorMatch.resposta;
      }
      return "Não encontrei essa resposta no sistema do archive. 😅 Selecione uma opção acima ou mande uma mensagem no nosso WhatsApp!";
    }

    function dispararEnvio() {
      const txt = input.value.trim();
      if (!txt) return;

      addMessage(txt, "user");
      input.value = "";

      setTimeout(() => {
        addMessage(buscarResposta(txt), "bot");
      }, 300);
    }

    function toggleChat() {
      const estaOculto = chatWindow.style.display === "none";
      if (estaOculto) {
        chatWindow.style.setProperty("display", "flex", "important");
        iconOpen.style.display = "none";
        iconClose.style.display = "block";
        input.focus();
      } else {
        chatWindow.style.setProperty("display", "none", "important");
        iconOpen.style.display = "block";
        iconClose.style.display = "none";
      }
    }

    if (opcoes.jsonUrl) {
      fetch(opcoes.jsonUrl)
        .then(res => res.json())
        .then(dados => {
          if (Array.isArray(dados)) {
            baseConhecimento = [...FAQ_PADRAO, ...dados];
            carregarMenuInicial();
          }
        })
        .catch(err => console.error("Erro ao carregar JSON:", err));
    }

    jsonFileInput.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const json = JSON.parse(evt.target.result);
          if (Array.isArray(json)) {
            baseConhecimento = [...FAQ_PADRAO, ...json];
            carregarMenuInicial();
            addMessage(`📂 Base extra carregada (${json.length} itens)`, "system-info");
          }
        } catch (err) {
          alert("Arquivo JSON inválido.");
        }
      };
      reader.readAsText(file);
    });

    toggleBtn.addEventListener("click", toggleChat);
    closeBtn.addEventListener("click", toggleChat);
    sendBtn.addEventListener("click", dispararEnvio);

    input.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        dispararEnvio();
      }
    });

    carregarMenuInicial();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      window.initChatbot();
    });
  } else {
    window.initChatbot();
  }
})();
