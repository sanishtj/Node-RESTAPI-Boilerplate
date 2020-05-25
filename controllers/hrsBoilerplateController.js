const { validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");


function HRSBoilerplateController() {
  const fetchHRSBoilerplateItems = (req, res) => apiResponse.successResponseWithData(res, "Fetch Succeeded", {});

  const fetchHRSBoilerplateItemById = (req, res) => apiResponse.successResponseWithData(res, "Fetch Succeeded", {});

  const addHRSBoilerplateItems = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return apiResponse.validationError(res, errors);
    }

    return apiResponse.successResponseWithData(res, "Insert Succeeded", {});
  };

  const patchHRSBoilerplateItem = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return apiResponse.validationError(res, errors);
    }

    return apiResponse.successResponseWithData(res, "Update Succeeded", {});
  };

  const deleteHRSBoilerplateItemById = (req, res) => apiResponse.successResponseWithData(res, "Delete Succeeded", {});

  return {
    fetchHRSBoilerplateItems,
    fetchHRSBoilerplateItemById,
    addHRSBoilerplateItems,
    patchHRSBoilerplateItem,
    deleteHRSBoilerplateItemById,
  };
}

module.exports = HRSBoilerplateController;
