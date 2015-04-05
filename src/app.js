
// var LoaderLayer = cc.Layer.extend({
//     init: function(){

//         this._super();

//         //2. get the screen size of your game canvas
//         var winsize = cc.director.getWinSize();

//         //3. calculate the center point
//         var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

//         //4. create a background image and set it's position at the center of the screen
//         var spritebg = new cc.Sprite(res.loading);
//         spritebg.setPosition(centerpos);
//         this.addChild(spritebg);

//     }
// })

// var LoaderScene = cc.Scene.extend({
//     onEnter: function(){
//         this._super;
//         var layer = new LoaderLayer();
//         layer.init();
//         this.addChild(layer);
//     }
// })

var MenuLayer = cc.Layer.extend({
    init: function(){

        this._super();

        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        var spritebg = new cc.Sprite(res.menuBg);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);
        //5.

        cc.MenuItemFont.setFontSize(60);

        //6.create a menu and assign onPlay event callback to it
        var menuItemPlay = new cc.MenuItemSprite(
            new cc.Sprite(res.startMenuPlay), // normal state image
            new cc.Sprite(res.startMenuPlayActive), // select state image
            this.onPlay, this);
        
        var menu = new cc.Menu(menuItemPlay);  //7. create the menu
        menu.setPosition(centerpos);
        this.addChild(menu);

    },

    onPlay: function(){
        console.log("-- start playn")
    }
})

var MenuScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});
