aplikacja  = new Backbone.Marionette.Application();
aplikacja.addRegions({
    mainRegion: '#content'
});

Herbata = Backbone.Model.extend({
    defaults:{
        name:"noname",
        type:"unavaible",
        company:"unavaible"
}
});

Herbatki = Backbone.Collection.extend({
    model: Herbata
});


HerbataViewer = Backbone.Marionette.ItemView.extend({
    template: "#template_item",
    tagName: "li",
    className: "herbata",
    events: {
    'click .disqualify': 'disqualify'
    },
    disqualify: function(){
        this.model.destroy();
    }
});

HerbatkiViewer = Backbone.Marionette.CompositeView.extend({
    template: "#template_collection",
    tagName: "ul",
    className: "collection",
    itemView: HerbataViewer,
    category_of_tea: "dark_teas",
    id: "colection1",
    //appendik: $collectionView.$("table"),
    appendHTML: function(collectionView, itemView){
    $collectionView.$("ul").append(itemView);
    }
})
aplikacja.addInitializer(function(options){
        var herbatkiViewer = new HerbatkiViewer({
            collection: options.collection
        });
        aplikacja.mainRegion.show(herbatkiViewer);
})
$(document).ready(function(){
        herbatki = new Herbatki([
        new Herbata({name: "Pu-erh"}),
        new Herbata({name: "Roiboos"}),
        new Herbata({name: "Tetley"}),
        new Herbata({name: "Irving"})
        ]);
    aplikacja.start({collection:herbatki});
            
});