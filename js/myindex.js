$(function(){

	//scroll desliza o menu, estar na documentação elemento custon
	$('.main_menu a[class!="active"]').click(function(){
		//para onde o usuario clicar ser direcionado
		var goto = $('.' + $(this).attr('href').replace('#','')).position().top;

		$('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
		
		console.clear();
		console.log(goto);
		return false;
	});

	//suspende o menu ou menu fixed
	$(window).scroll(function(){
		// ele colocou + 150
		if($(this).scrollTop() > $('.main_header').outerHeight() + 10){
			$('body').css('padding-top', $('.main_header').outerHeight());
			$('.main_header').addClass('main_header_fixed');
			$('.j_back').fadeIn(500);
		}else{
			$('body').css('padding-top', '0');
			$('.main_header').removeClass('main_header_fixed');
			$('.j_back').css('display', 'none');
			// $('.j_back').fadeOut(); ou usar este efeito aqui
		}
		// console.log('scroll');
	});

	//botao para voltar ao topo
	$('.j_back').on('click', function(){
		$('html, body').animate({scrollTop:0}, 1000);
	});

	//form submit
	$('.j_formsubmit').submit(function(){
		
		var dados = $(this).serialize();

		$.ajax({
			url:'ajax.php',
			data:dados,
			type:'POST',
			dataType:'json',
			beforeSend: function(){
				$('.form_load').fadeIn(4000);
			},
			success: function(data){
				console.clear();
				console.log(data);
				$('.form_load').fadeOut();
				alert('Olá ' + data.nome + ' sua mensagem foi recebida com sucesso estaremos entrando em contato em breve! :D');
			}
		});
		return false;
	});

});