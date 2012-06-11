mc = {
  init: function() {
	mc.popover();
	mc.modals();
  },
  
  modals: function() {
    $('#german_shepherd').click(){
        $('#myModal').modal();
    }
  },
  
  popover: function () {
    $('#test_button').popover();
  }
}

mc.init();
