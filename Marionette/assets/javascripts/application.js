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
    className: "herbata"
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
            collection: options.collection1
        });
        aplikacja.mainRegion.show(herbatkiViewer);
})
$(document).ready(function(){
        collection1 = new Herbatki([
        new Herbata({name: "Pu-erh"}),
        new Herbata({name: "Roiboos"}),
        new Herbata({name: "Tetley"}),
        new Herbata({name: "Irving"})
        ]);
    aplikacja.start({collection1:collection1});
            
});