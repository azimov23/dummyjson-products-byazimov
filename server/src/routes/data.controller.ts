import { Request, Response } from "express";
import dataModel from "../model/data.model";

export const getDatas = async (req: Request, res: Response) => {
  try {
    let limit = (req.query.limit as any) || 10;
    let skip = (req.query.skip as any) || 0;

    const count = await dataModel.count();

    const { search } = req.query;
    let query = {};
    const rgx = (pattern: any) => new RegExp(`.*${pattern}.*`);
    const searchRgx = rgx(search);
    if (search) {
      query = {
        $or: [
          { title: { $regex: searchRgx, $options: "i" } },
          { description: { $regex: searchRgx, $options: "i" } },
          { brand: { $regex: searchRgx, $options: "i" } },
        ],
      };
    }
    const data = await dataModel.find(
      query,
      { __v: 0, _id: 0 },
      { sort: { id: 1 }, limit, skip }
    );
    res.json({
      data,
      total: count,
      limit,
      skip,
    });
  } catch (error) {
    res.status(404).json({
      message: "Datas not found",
    });
  }
};
