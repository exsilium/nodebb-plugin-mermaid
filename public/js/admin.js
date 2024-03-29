/* globals define, socket, app, $ */
define('admin/plugins/mermaid', ['settings', 'alerts'], function(Settings, alerts) {
  'use strict';

  var ACP = {};

  ACP.init = function() {
    Settings.load('mermaid', $('.mermaid-settings'));

    $('#save').on('click', function() {
      Settings.save('mermaid', $('.mermaid-settings'), function() {
        alerts.alert({
          type: 'success',
          alert_id: 'mermaid-saved',
          title: 'Settings Saved',
          message: 'Please reload your NodeBB to apply these settings',
          clickfn: function() {
            socket.emit('admin.reload');
          }
        });
      });
    });
  };

  return ACP;
});