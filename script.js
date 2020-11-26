$('nav a').click(function(e) {
    e.preventDefault();
    $('nav a').removeClass('active');
    $(this).addClass('active');
    if(this.id === !'quemsomos'){
      $('.quemsomos').addClass('noshow');
    }
    else if(this.id === 'quemsomos') {
      $('.quemsomos').removeClass('noshow');
      $('.rightbox').children().not('.quemsomos').addClass('noshow');
    }
    else if (this.id === 'home') {
      $('.home').removeClass('noshow');
       $('.rightbox').children().not('.home').addClass('noshow');
    }
    else if(this.id === 'projetos') {
      $('.projetos').removeClass('noshow');
      $('.rightbox').children().not('.projetos').addClass('noshow');
    }
  
    else if(this.id === 'contato') {
      $('.contato').removeClass('noshow');
      $('.rightbox').children().not('.contato').addClass('noshow');
    }
  });









  // $('nav a').click(function(e) {
  //   e.preventDefault();
  //   $('nav a').removeClass('active');
  //   $(this).addClass('active');
  //   if(this.id === !'payment'){
  //     $('.payment').addClass('noshow');
  //   }
  //   else if(this.id === 'payment') {
  //     $('.payment').removeClass('noshow');
  //     $('.rightbox').children().not('.payment').addClass('noshow');
  //   }
  //   else if (this.id === 'home') {
  //     $('.profile').removeClass('noshow');
  //      $('.rightbox').children().not('.profile').addClass('noshow');
  //   }
  //   else if(this.id === 'subscription') {
  //     $('.subscription').removeClass('noshow');
  //     $('.rightbox').children().not('.subscription').addClass('noshow');
  //   }
  //     else if(this.id === 'privacy') {
  //     $('.privacy').removeClass('noshow');
  //     $('.rightbox').children().not('.privacy').addClass('noshow');
  //   }
  //   else if(this.id === 'settings') {
  //     $('.settings').removeClass('noshow');
  //     $('.rightbox').children().not('.settings').addClass('noshow');
  //   }
  // });