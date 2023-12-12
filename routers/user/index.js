const express = require('express')
const router = express.Router();
const {query, execute} = require('../../db/dbhelper.js');
//import logger  from "../../config/logger.js";

//https://swagger.io/docs/specification/describing-parameters/

/**
 * @swagger
 * /api/user:
 *  get:
 *    summary: "유저 5건 조회 Query 방식"
 *    description: "요청 경로에 값을 담아 서버에 보낸다."
 *    tags: [Users]
 *    responses:
 *      "200":
 *        description: 
  *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg : 
 *                  type : string
 *                status: 
 *                  type : integer
 *                  example : 200
 *                result:
 *                  type: object
 *                  example: [{
      "idx": 1,
      "userID": "test123",
      "userName": "테스터123",
      "Phone": "010123",
      "regDate": "2023-12-01T01:42:04.000Z"
    }]
 */
router.get('/', async (req, res) => {
    const members = await query('SELECT * FROM `member` ORDER BY `userID` ASC LIMIT 5;');
    res.status(members.status).json(members);
});

/**
 * @swagger
 * /api/user/{user_id}:
 *  get:
 *    summary: "특정 유저조회 Path 방식"
 *    description: "요청 경로에 값을 담아 서버에 보낸다."
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: user_id
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (특정 유저 조회)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg : 
 *                  type : string
 *                status: 
 *                  type : integer
 *                  example : 200
 *                result:
 *                  type: object
 *                  example: [{
      "idx": 1,
      "userID": "test123",
      "userName": "테스터123",
      "Phone": "010123",
      "regDate": "2023-12-01T01:42:04.000Z"
    }]
 */
router.get('/:id', async (req, res) => {
    const members = await query('SELECT * FROM `member` WHERE userID = ?', [req.params.id ]);
    res.status(members.status).json(members);
});

module.exports = router;