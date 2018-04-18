'use strict';

/**
 * Helper to normalize ID
 */
module.exports = function normalizeId(ret) {
  if (ret._id && typeof ret._id === 'object' && ret._id.toString) {
    ret._id = ret._id.toString();
  }
};
