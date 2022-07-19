import { documents } from ".";

export default function handler(req, res) {
  res.status(200).json(documents.response.find(document => document.id == req.query.id))
}