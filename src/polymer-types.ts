// Force file to be a module to augment global scope.
export {};

declare global {
  // for fire event
  interface HASSDomEvents {
    "hass-logout": undefined;
    "iron-resize": undefined;
    "config-refresh": undefined;
    "ha-refresh-cloud-status": undefined;
    "hass-more-info": {
      entityId: string;
    };
    "location-changed": undefined;
    "hass-notification": {
      message: string;
    };
  }
}
