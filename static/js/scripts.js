new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['home', 'projects', 'services', 'resume', 'contact'],
  sectionsColor: ['#393F42', '#000', '#393F42', '#FFA713', '#000'],
  menu: '#myMenu',
  scrollingSpeed: 650,
  autoScrolling: true,
  scrollHorizontally: true,
  loopBottom: true,
  scrollOverflow: true,
  fixedElements: '#next',
  menu: '#menu',
  css3: true
});

$(window).on('load', () => $('#overlay').fadeOut());
$('#next').on('click', () => fullpage_api.moveSectionDown());
const wrapIt = item => `<a class="fab fa-fw fa-${item}"></a>`;

Handlebars.registerHelper('splitTech', tech => {
  let techArray = tech.split(',');
  let item = '';
  let str = '';

  techArray.map(elem => {
    item = elem.trim().toLowerCase();

    str += wrapIt(item);
  });

  return new Handlebars.SafeString(str);
});

$.get('https://boiling-chamber-41113.herokuapp.com/projects', projects => {
  let source = $('#document-template').html();
  let template = Handlebars.compile(source);
  let html = template(projects);
  $('#DocumentResults').html(html);
  $('.material-card').on('click', '.mc-btn-action', function() {
    let card = $(this).parent('.material-card');
    let icon = $(this).children('i');
    icon.addClass('fa-spin-fast');

    if (card.hasClass('mc-active')) {
      card.removeClass('mc-active');

      window.setTimeout(() => {
        icon
          .removeClass('fa-arrow-left')
          .removeClass('fa-spin-fast')
          .addClass('fa-bars');
      }, 800);
    } else {
      card.addClass('mc-active');

      window.setTimeout(() => {
        icon
          .removeClass('fa-bars')
          .removeClass('fa-spin-fast')
          .addClass('fa-arrow-left');
      }, 800);
    }
  });
});

$('.header').on(
  'mouseover',
  () => (document.getElementById('sidebar-menu').style.left = '0')
);

$('.header').on(
  'mouseout',
  () => (document.getElementById('sidebar-menu').style.left = '-320px')
);

$('.close-btn').on(
  'click',
  () => (document.getElementById('sidebar-menu').style.left = '-320px')
);
