function IndexController( view, scope ){

  // Controller constructor is called when an instance
  // of the html element is created

  // Controllers are stateless, the model is used to
  // store state data instead.

  // This class extends component/view/AbstractController
  // so we need to call the super contructor
  this.super( view, scope );
  scope.onAttached.then(function() {
    console.log("index attached");
  });
  this.getDisplay = function() {
    var editButtonItems = [
      '<ui-button',
      ' data-icon="pencil"',
      ' data-href="view/contact/{{ model._id }}">',
      '</ui-button>'
    ];

    var deleteButtonItems = [
        '<ui-button',
        ' data-icon="trash"',
        ' data-activate="->f({{model._id}})">',
        '</ui-button>'
    ];

    return {
      row: {
        id: '_id'
      },
      columns: [
        "lastname", "firstname", {
          title: "",
          cellTemplate: editButtonItems.join('')
        }, {
          title: "",
          cellTemplate: deleteButtonItems.join('')
       }
      ]
    };
  };
  this.onActivate = function(e) {
    var controller = this;
    scope.sendDeleteRequest('/contacts/' + e.detail.data).then(function() {
        controller.refresh();
        alert('Record deleted');
    });
  };
}

module.exports = IndexController;
