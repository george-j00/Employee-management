// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import MongoConnect from "../../database/connection"



export default function handler(req, res) {
  MongoConnect()
  res.status(200).json({ name: 'John Doe' })
}
