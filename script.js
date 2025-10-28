    // define a data de início
    const dataInicio = new Date("2024-10-28T14:00:00");

    function atualizarContador() {
      const agora = new Date();
      const diferenca = agora - dataInicio; 

      const segundosTotais = Math.floor(diferenca / 1000);
      const dias = Math.floor(segundosTotais / 86400);
      const horas = Math.floor((segundosTotais % 86400) / 3600);
      const minutos = Math.floor((segundosTotais % 3600) / 60);
      const segundos = segundosTotais % 60;

      document.getElementById("contador").textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }

    atualizarContador(); 
    setInterval(atualizarContador, 1000); 