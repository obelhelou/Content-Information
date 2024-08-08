// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
}); 




// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:radio").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":radio")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:radio[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("radio", false);
    $box.prop("radio", true);
  } else {
    $box.prop("radio", false);
  }
});


 


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');


select.addEventListener('click', () => {

  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
});

options.forEach(option => {

  option.addEventListener('click', () => {

    selected.innerText = option.innerText;

    select.classList.remove('select-clicked');

    caret.classList.remove('caret-rotate');

    menu.classList.remove('menu-open');

    options.forEach(option => {

      option.classList.remove('active');
    });

    option.classList.add('active');
    });
  });
});