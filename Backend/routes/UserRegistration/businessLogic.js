const MicroServiceResponse = require("../../handler/ResponseModels/MicroServiceResponse");
var UserRegistration = require("../../handler/DataBaseModel/UserSchema");
// const mongodbutil = require('../../config/database');
var bcrypt = require("bcryptjs");

const UserReg = async function (req, res) {
  try {
    // console.log("Ok 1");
    const SignedUpUser = new UserRegistration({
      fullName: req.body.fullName,
      mobileno: req.body.mobileno,
      email: req.body.email,
      metamaskid: req.body.metamaskid,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    SignedUpUser.save((err, data) => {
      if (err) {
        console.log({ err });
        return res.status(400).json({
          message: err.message,
          isSuccessful: false,
          data: undefined,
        });
      }
      console.log({ data });
      return res.status(201).json(data);
    });
    // console.log("Ok 2");
    // SignedUpUser.save()
    //   .then((data) => {
    //     // microServiceResponse.data = data;
    //     // resolve(microServiceResponse);
    //     res.status(200).json(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // microServiceResponse.
    //     // resolve(microServiceResponse);
    //     res
    //       .status(203)
    //       .send({ message: "Problem occured in saving data ...." });
    //   });
  } catch (err) {
    console.log(
      "Error catched in User Hospital: " + err.name + " : " + err.message
    );

    // microServiceResponse.MicroserviceErrorResponseListForUI.push(err.message);
    // microServiceResponse.MicroserviceErrorResponseList.push(err);

    // resolve(microServiceResponse);
    res.status(500).send({ message: "This error is from our side" });
  }
};

module.exports.UserReg = UserReg;
