import User from "../../../models/UserModel";
import { StatusCodes } from "http-status-codes";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../utils/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;

  const { firstName, lastName, password, email } = req.body;

  if (!firstName || !email || !password) {
    res.status(422).json({
      message: "validation Error",
    });
    return;
  }

  await db.connectDB();

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    console.log("Email in use");
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Email in use" });
    return;
  }

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.disconnect();

  res.status(StatusCodes.CREATED).send({
    user: {
      firstName,
      lastName,
      email,
      _id: user._id,
      isAdmin: user.isAdmin,
    },
  });
}

export default handler;
