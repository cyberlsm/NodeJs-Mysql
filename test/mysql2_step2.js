import {query, execute} from '../db/dbhelper.js';


async function getMembers(){
  const result = await execute('SELECT * FROM `member` ORDER BY `userID` ASC LIMIT 5;');
  return(result);
}
async function getMember(userid){
  const result = await query('SELECT * FROM member WHERE userid = ?;', [userid]);
  return(result);
}



const members = await getMembers();
console.log(members);

const member1 = await getMember('test123');
console.log(member1);

const member2 = await getMember('test456');
console.log(member2);