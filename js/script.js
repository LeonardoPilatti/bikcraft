// nesse if(se), so vai existir se tiver o css SimpleSlide linkado no html, para nao aparecer erro no console do // navegador
if(window.SimpleSlide){
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal
    time: 5000, // tempo de transição dos slides, a cada 5 segundos o slide sera trocado, pois esta em milisegundos
});

  new SimpleSlide({
    slide: "portfolio", // nome do atributo data-slide="principal
    time: 5000, // tempo de transição dos slides, a cada 5 segundos o slide sera trocado, pois esta em milisegundos
    nav: true,  // para ativar a opcao de escolher qual slide eu quero
});
}

 if(window.SimpleAnime){
   new SimpleAnime();
} 

if(window.SimpleForm){ 
// esse simpleform eh para os formularios, para aparecer as mensagens de erro e de enviado
new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});
}