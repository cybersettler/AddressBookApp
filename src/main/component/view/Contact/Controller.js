function ContactController( view, scope ){

  // Controller constructor is called when an instance
  // of the html element is created

  // Controllers are stateless, the model is used to
  // store state data instead.

  // This class extends component/view/AbstractController
  // so we need to call the super contructor
  this.super( view, scope );
  this.getModel = function() {
    if (view.dataset.path === 'new') {
      return {};
    }
    var url = '/contacts/' + view.dataset.path;
    return scope.sendGetRequest(url)
    .then(function(response) {
      return response.body;
    });
  };
  this.getDisplay = function() {
    return {
      style: 'default',
      fields: ["firstname", "lastname", "birthday", {
        inputType: 'submit',
        title: 'Submit'
      }]
    };
  };
  this.getMethod = function() {
    return view.dataset.path === 'new' ? 'post' : 'patch';
  };
  this.getAction = function() {
    return view.dataset.path === 'new' ? '/contacts' :
    '/contacts/' + view.dataset.path;
  };
  this.onSuccess = function() {
    scope.navigateTo('view/index');
  };
  this.onError = function(error) {
    alert("something went wrong");
    console.log("something went wrong", error);
  };
}

module.exports = ContactController;
