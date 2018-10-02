$(window).load(function() {
  $('#overlay').fadeOut();
});

const wrapIt = item => {
  return `<a class="fab fa-fw fa-${item}"></a>`;
};

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

      window.setTimeout(function() {
        icon
          .removeClass('fa-arrow-left')
          .removeClass('fa-spin-fast')
          .addClass('fa-bars');
      }, 800);
    } else {
      card.addClass('mc-active');

      window.setTimeout(function() {
        icon
          .removeClass('fa-bars')
          .removeClass('fa-spin-fast')
          .addClass('fa-arrow-left');
      }, 800);
    }
  });
});

// let current = document.getElementsByClassName('menu-item active')[0].innerHTML;

$('.header').on('mouseover', function() {
  document.getElementById('sidebar-menu').style.left = '0';
  // document.getElementsByClassName('menu-item active')[0].innerHTML = 'Menu';
});

$('.header').on('mouseout', function() {
  document.getElementById('sidebar-menu').style.left = '-320px';
  // document.getElementsByClassName('menu-item active')[0].innerHTML = current;
});

$('.close-btn').on('click', function() {
  document.getElementById('sidebar-menu').style.left = '-320px';
  // document.getElementsByClassName('menu-item active')[0].innerHTML = current;
});

$(document).ready(function() {});
// $('.logo-icon').on('click', function() {
//   document.getElementById('sidebar-menu').style.left = '-320px';
//   // document.getElementsByClassName('menu-item active')[0].innerHTML = current;
// });

// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:3000/projects', true);
// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
// };
// request.send();

// var data = [
//   {
//     Category: 'General',
//     DocumentList: [
//       {
//         DocumentName: 'Document Name 1 - General',
//         DocumentLocation: 'Document Location 1 - General'
//       },
//       {
//         DocumentName: 'Document Name 2 - General',
//         DocumentLocation: 'Document Location 2 - General'
//       }
//     ]
//   },
//   {
//     Category: 'Unit Documents',
//     DocumentList: [
//       {
//         DocumentName: 'Document Name 1 - Unit Documents',
//         DocumentList: 'Document Location 1 - Unit Documents'
//       }
//     ]
//   },
//   {
//     Category: 'Minutes'
//   }
// ];

// $(function() {
//   $('.material-card').on('click', '.mc-btn-action', function() {
//     var card = $(this).parent('.material-card');
//     var icon = $(this).children('i');
//     icon.addClass('fa-spin-fast');
//
//     if (card.hasClass('mc-active')) {
//       card.removeClass('mc-active');
//
//       window.setTimeout(function() {
//         icon
//           .removeClass('fa-arrow-left')
//           .removeClass('fa-spin-fast')
//           .addClass('fa-bars');
//       }, 800);
//     } else {
//       card.addClass('mc-active');
//
//       window.setTimeout(function() {
//         icon
//           .removeClass('fa-bars')
//           .removeClass('fa-spin-fast')
//           .addClass('fa-arrow-left');
//       }, 800);
//     }
//   });
// });
