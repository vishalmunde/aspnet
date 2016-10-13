//site.js
(function () {

    //var ele = $("#username");
    //ele.text("Vishal Munde");
    

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this)
    //alert(me.text());
    //});
    var $siderbarAndWrapper = $("#sidebar", "#wrapper");
    $("#sidebarToggle").on("click", function () {
        $siderbarAndWrapper.toggleClass("hide-sidebar");
    })

    var $main = $("#main").on("click", function () {
        $(this).attr("background-color", "Red");
    })
})();