odoo.define('r_disable_debug_mode.hideDebugManager', function (require) {
    'use strict';
    var session = require('web.session');
    const DebugManager = require("web.DebugManager");
    
    //Check if current user has Administration/Settings group.
    session.user_has_group('base.group_system').then(function(has_group){
      if (!has_group){
        //Remove the debug icon if current user is not an administrator.
        DebugManager.include({
          xmlDependencies: (DebugManager.prototype.xmlDependencies || []).concat(["/r_disable_debug_mode/static/src/xml/hide_debug.xml"]),
          //Leave the debug mode automatically if current user is not an administrator.
          start: function () {
            this.leave_debug_mode();
          },
          // Leave the debug mode automatically if non admin user somehow gets access to menu and click on it.
          perform_callback: function (evt) {
            this.leave_debug_mode();
          }
        });
      }
    })
});