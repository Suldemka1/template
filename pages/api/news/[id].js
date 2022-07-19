import { news } from ".";

export default function handler(req, res) {
  res.status(200).json(news.response.find(news => news.id == req.query.id))
}