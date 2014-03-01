 
 var Blog = new Meteor.Collection("blogPosts");





 if (Meteor.isClient) {

var putDate = function (){
  var today = new Date();
  var dd = today.getDate(); 
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  return mm +"."+ dd  +"."+ yyyy; 
};


  Template.form.events({
      'click #btnSubmit' : function (){
        var title = $('#txtTitle');
        var body = $('#txaBody');
        var tags = $('#txtTags');
        var date = putDate();
        console.log(date);
        Blog.insert({ 
          title : title.val(),
          body  : body.val(),
          date  : date,
          dateTimeStamp : new Date(),
          tags  : tags.val()
        });

        title.val('');
        body.text('');
        tags.val('');
      }
  });


Template.header.events({
    'click #showForm' : function () {
      $('.form').toggle();
    },
    'click #exitForm' : function () {
      $('.form').toggle();
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


   Template.posts.post = function (){
      //return Blog.find({});
      return Blog.find(
        {},
        { sort :{"dateTimeStamp": -1}} 
      );
   }





 Template.sidebar.postTitle = function (){
      //return Blog.find({});
      return Blog.find(
        {},
        { sort :{"dateTimeStamp": -1}} 
      );
   }

 Template.post.rendered = function(){
  document.addEventListener('DOMContentLoaded', function() {
   $('textarea').autoResize();
});
    


  }
 
}


 
