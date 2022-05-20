import db from '../models/index.js'
export default function BoardService() {
    const Board = db.board
    return {
        write(req, _res) {
            const {passengerId, name, teamId, subject} = req
                .body
                console
                .log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            console.log(`passengerId 값 : ${passengerId}`)
            console.log(`name 값 : ${name}`)
            console.log(`teamId 값 : ${teamId}`)
            console.log(`subject 값 : ${subject}`)
            new Board(req.body).save(() => {
                return 'ok'
            })

        }
    }
}
