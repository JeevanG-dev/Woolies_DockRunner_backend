import { User } from "../schemas/users.schema.js";

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.find();

    return res.status(200).json({
      message: "OK",
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const addUser = async (req, res) => {
  try {
    const { employeeid, fullName, email, password } = req.body;

    if (!employeeid || !fullName || !email || !password) {
      return res.status(400).json({
        message: "All the field is required.",
      });
    }

    //checking existing user

    const existingUserId = await User.findOne({ employeeid});
    const existingUserEmail = await User.findOne({ email });



    if (existingUserId) {
      return res.status(400).json({ message: "User already exist" });
    }

      if (existingUserEmail) {
      return res.status(400).json({ message: "User already exist" });
    }


    const newUser = new User({ employeeid, fullName, email, password });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong - maybe bad crediential",
      data: {},
      error: error.message,
    });
  }
};
