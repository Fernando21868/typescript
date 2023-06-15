import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR GET BLOG");
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR GET BLOG");
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR UPDATE BLOG");
  }
};

const postBlog = ({ body }: Request, res: Response) => {
  try {
    console.log("post");
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR POST BLOG");
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR DELETE BLOG");
  }
};

export { getBlog, getBlogs, postBlog, updateBlog, deleteBlog };
