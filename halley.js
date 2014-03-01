var Blog = new Meteor.Collection("blogPosts");

if (Meteor.isClient) {

  /* Load database content */
   Template.posts.post = function (){
      return Blog.find( {}, { sort :{"dateTimeStamp": -1}} );
   };

  Template.sidebar.postTitle = function (){
      return Blog.find( {}, { sort :{"dateTimeStamp": -1}} );
   };

 /* tools */
  var putDate = function (){ 
    var today = new Date(),
           dd = today.getDate(), 
           mm = today.getMonth()+1,
         yyyy = today.getFullYear();
    return mm +"."+ dd  +"."+ yyyy; 
  };
  function formToggle (){
    $('.form').toggle();
  };

  Template.form.events({
      'click #btnSubmit' : function (){
        var title = $('#txtTitle'),
             body = $('#txaBody'),
             tags = $('#txtTags'),
             date = putDate();

        console.log(date);

        Blog.insert({ 
          title : title.val(),
          body  : body.val(),
          date  : date,
          dateTimeStamp : new Date(),
          tags  : tags.val()
        });

        title.val('');
        body.val('');
        tags.val('');
        formToggle();

      }
  });

  Template.header.events({
    'click #showForm' : function () {
      formToggle();
    },
    'click #exitForm' : function () {
      formToggle();
    }
  });

  Template.post.events({
    
    'blur .editable' : function () {
    var target = event.currentTarget.value;
    var field = event.currentTarget.name;
    var obj = {};
        obj[field] = target;
    Blog.update( { _id: this._id },{ $set: obj } );
   },
 

  'click .postDeleteButton' : function () {
      var removing = confirm("Are you sure you want to remove this entry? Action cannot be undone.");
      if (removing){
        Blog.remove({_id: this._id});
      }
      else{
        return false;
      }
    }
    
  });
} // is client