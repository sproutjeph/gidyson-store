import UserModel from "../../models/UserModel";
import { users } from "../../utils/data";
import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connectDB();
  await UserModel.deleteMany();
  await UserModel.insertMany(users);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
};
export default handler;
