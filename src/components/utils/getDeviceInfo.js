// src/utils/getDeviceInfo.js

import { v4 as uuidv4 } from 'uuid';

export const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  let deviceType = "Desktop";

  if (/Mobi|Android/i.test(userAgent)) {
    deviceType = "Mobile";
  } else if (/iPad|Tablet/i.test(userAgent)) {
    deviceType = "Tablet";
  }

  // Generate or retrieve a unique device ID
  let deviceId = localStorage.getItem('deviceId');
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem('deviceId', deviceId);
  }

  return {
    deviceId,
    userAgent,
    deviceType,
  };
};
