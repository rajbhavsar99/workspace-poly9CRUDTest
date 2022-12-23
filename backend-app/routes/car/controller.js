const model = require("./model");
const {
  consoleSuccess,
  consoleError,
  consoleRequest,
  responseSuccess,
  responseError,
} = require("../../service/responseConstant");

exports.getAllCars = async (req, res) => {
  try {
    const resObj = {};
    await model
      .find({})
      .lean(true)
      .then((result) => {
        resObj.type = responseSuccess;
        resObj.data = result;
        res.json({ response: true, result: resObj });
      })
      .catch((err) => consoleError("Error => getAll", err));
  } catch (error) {
    consoleError("Error => getAll", error);
  }
};

exports.getCarById = async (req, res) => {
  try {
    const resObj = {};
    await model
      .findById({ _id: req.params.id })
      .then((result) => {
        resObj.type = responseSuccess;
        resObj.data = result;
        res.json({ response: true, result: resObj });
      })
      .catch((err) => consoleError("Error => getById", err));
  } catch (error) {
    consoleError("Error => getById", error);
  }
};

exports.createCar = async (req, res) => {
  try {
    const resObj = {};
    let reqObj = req.body;
    await model
      .create(reqObj)
      .then(async (result) => {
        resObj.type = responseSuccess;
        resObj.data = result;
        res.json({ response: true, result: resObj });
      })
      .catch((err) => consoleError("Error => addUser", err));
  } catch (error) {
    consoleError("Error => create", error);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const resObj = {};
    let reqObj = req.body;
    await model
      .findByIdAndUpdate({ _id: req.params.id }, reqObj, { new: true })
      .then((result) => {
        resObj.type = responseSuccess;
        resObj.data = result;
        res.json({ response: true, result: resObj });
      })
      .catch((err) => consoleError("Error => update", err));
  } catch (error) {
    consoleError("Error => update", error);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const resObj = {};
    let reqObj = req.body;
    await model
      .findByIdAndDelete({ _id: req.params.id }, reqObj)
      .then((result) => {
        resObj.type = responseSuccess;
        resObj.data = result;
        res.json({ response: true, result: resObj });
      })
      .catch((err) => consoleError("Error => delete", err));
  } catch (error) {
    consoleError("Error => delete", error);
  }
};