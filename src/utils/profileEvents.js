// src/utils/profileEvents.js
export const PROFILE_EVENTS = {
  PROGRESS_SHOULD_REFRESH: 'profile:progress:should-refresh',
};

const listeners = {};

export const emitProfileEvent = (eventName, payload = {}) => {
  if (!listeners[eventName]) return;
  listeners[eventName].forEach(callback => callback(payload));
};

export const onProfileEvent = (eventName, callback) => {
  if (!listeners[eventName]) listeners[eventName] = [];
  listeners[eventName].push(callback);
  return () => {
    listeners[eventName] = listeners[eventName].filter(cb => cb !== callback);
  };
};