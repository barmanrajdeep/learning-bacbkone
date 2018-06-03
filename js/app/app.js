var MyTodoItems = Backbone.Collection.extend({
})
var MyView = Backbone.View.extend({
    initialize: function initialize() {
        this.todoItems = [{task: "Have lunch"},{task: "Take a bath"},{task: "Study"},{task: "Cook dal makhani"}];
        this.todoItemsCollection = new MyTodoItems();
        this.listenTo(this.todoItemsCollection, "reset", this.setData);
        this.todoItemsCollection.reset(this.todoItems);
    },
    setData: function setData(data) {
        _.each(data.models, (model)=> {
            this.renderEach(model);
        });
    },
    renderEach: function renderEach(eachItemData) {
        var eachTodo = new myTodoItemView({
            model: eachItemData,
            className: "rajdeep"
        });
        // some more operations
        $(".app_ctn").append(eachTodo.render().$el);
    }
});
var myTodoItemView = Backbone.View.extend({
    initialize: function initialize(options) {
        this.model = options.model;
    },
    template: "<div class='item'><%= harshita%></div>",
    render: function() {
        var compiledTemplate = _.template(this.template);
        var temp = compiledTemplate({harshita: this.model.get("task")});
        this.$el.append(temp);
        return this;
    }
});
var TodoModel = Backbone.Model.extend({

});
var myViewInst = new MyView();
//var MyTodoItems = new Backbone.Collection([models], [options]);