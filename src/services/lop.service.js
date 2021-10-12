const httpStatus = require('http-status');
const { Lop } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createLop = async (userBody) => {
  return Lop.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLop = async (filter, options) => {
  const lops = await Lop.paginate(filter, options);
  return lops;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getLopById = async (id) => {
  return Lop.findById(id);
};

/**
 * Update user by id
 * @param {ObjectId} lopId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateLopById = async (lopId, updateBody) => {
  const lop = await getLopById(lopId);
  if (!lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  Object.assign(lop, updateBody);
  await lop.save();
  return lop;
};

/**
 * Delete user by id
 * @param {ObjectId} lopId
 * @returns {Promise<User>}
 */
const deleteLopById = async (lopId) => {
  const lop = await getLopById(lopId);
  if (!lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await lop.remove();
  return lop;
};

module.exports = {
  createLop,
  queryLop,
  getLopById,
  updateLopById,
  deleteLopById,
};
