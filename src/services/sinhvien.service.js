const httpStatus = require('http-status');
const { Sinhvien } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createSinhvien = async (userBody) => {
  return Sinhvien.create(userBody);
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
const querySinhviens = async (filter, options) => {
  const sinhviens = await Sinhvien.paginate(filter, options);
  return sinhviens;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getSinhvienById = async (id) => {
  return Sinhvien.findById(id);
};

/**
 * Update user by id
 * @param {ObjectId} SinhvienId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */

const updateSinhvienById = async (sinhvienId, updateBody) => {
  const user = await getSinhvienById(sinhvienId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
 
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} SinhvienId
 * @returns {Promise<User>}
 */
const deleteSinhvienById = async (sinhvienId) => {
  const user = await getSinhvienById(sinhvienId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createSinhvien,
  querySinhviens,
  getSinhvienById,
  updateSinhvienById,
  deleteSinhvienById,
};
